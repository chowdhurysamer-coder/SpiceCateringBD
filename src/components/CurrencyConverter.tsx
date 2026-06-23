"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowLeftRight } from "lucide-react";

const CURRENCIES = [
  { code: "BDT", name: "Bangladeshi Taka", symbol: "৳" },
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "AED", name: "UAE Dirham", symbol: "AED" },
  { code: "CAD", name: "Canadian Dollar", symbol: "CA$" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
  { code: "SAR", name: "Saudi Riyal", symbol: "SAR" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "QAR", name: "Qatari Riyal", symbol: "QR" },
  { code: "KWD", name: "Kuwaiti Dinar", symbol: "KD" },
];

const QUICK_TARGETS = ["USD", "GBP", "EUR", "AED", "SAR", "INR", "SGD", "MYR"];

export const CurrencyConverter = () => {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState("1000");
  const [from, setFrom] = useState("BDT");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((r) => r.json())
      .then((data) => {
        if (data.result === "success") {
          setRates(data.rates);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const convert = useCallback(
    (amt: string, f: string, t: string) => {
      const n = parseFloat(amt);
      if (!n || !rates[f] || !rates[t]) { setResult(null); return; }
      const inUsd = n / rates[f];
      setResult(inUsd * rates[t]);
    },
    [rates]
  );

  useEffect(() => { convert(amount, from, to); }, [amount, from, to, convert]);

  const swap = () => { setFrom(to); setTo(from); };

  const fromInfo = CURRENCIES.find((c) => c.code === from)!;
  const toInfo = CURRENCIES.find((c) => c.code === to)!;

  return (
    <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8 lg:p-10">
      <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
        <div className="flex-1 w-full">
          <label className="text-xs text-stone-400 uppercase tracking-widest block mb-2">Amount</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 border border-stone-200 rounded-xl px-4 py-3 text-lg font-semibold text-[#1A1008] focus:outline-none focus:border-[#C0581A] transition-colors min-w-0"
              min="0"
            />
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border border-stone-200 rounded-xl px-3 py-3 text-sm font-medium text-[#1A1008] focus:outline-none focus:border-[#C0581A] bg-white cursor-pointer"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>{c.code}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={swap}
          className="h-11 w-11 rounded-full border border-stone-200 hover:border-[#C0581A] hover:text-[#C0581A] flex items-center justify-center text-stone-400 transition-all shrink-0 mt-6"
          aria-label="Swap currencies"
        >
          <ArrowLeftRight className="size-4" />
        </button>

        <div className="flex-1 w-full">
          <label className="text-xs text-stone-400 uppercase tracking-widest block mb-2">Convert to</label>
          <div className="flex gap-2">
            <div className="flex-1 border border-[#C0581A]/30 bg-[#FAF7F2] rounded-xl px-4 py-3 min-w-0">
              {loading ? (
                <span className="text-stone-400 text-sm">Loading rates…</span>
              ) : error ? (
                <span className="text-red-400 text-sm">Unavailable</span>
              ) : (
                <span className="text-lg font-semibold text-[#C0581A]">
                  {result !== null ? `${toInfo.symbol} ${result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "—"}
                </span>
              )}
            </div>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border border-stone-200 rounded-xl px-3 py-3 text-sm font-medium text-[#1A1008] focus:outline-none focus:border-[#C0581A] bg-white cursor-pointer"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>{c.code}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {!loading && !error && rates[from] && rates[to] && (
        <p className="text-xs text-stone-400 text-center mb-8">
          1 {fromInfo.code} = {(rates[to] / rates[from]).toFixed(4)} {toInfo.code} · Live rates via ExchangeRate-API
        </p>
      )}

      {!loading && !error && (
        <div>
          <div className="text-xs text-stone-400 uppercase tracking-widest mb-4 text-center">
            1,000 {fromInfo.name} equals
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {QUICK_TARGETS.filter((t) => t !== from).slice(0, 8).map((code) => {
              const info = CURRENCIES.find((c) => c.code === code)!;
              const n = 1000 / (rates[from] || 1) * (rates[code] || 1);
              return (
                <div
                  key={code}
                  className="border border-stone-100 rounded-xl p-3 text-center hover:border-[#C0581A]/30 hover:bg-[#FAF7F2] transition-all cursor-pointer"
                  onClick={() => setTo(code)}
                >
                  <div className="text-xs text-stone-400 mb-1">{code}</div>
                  <div className="font-semibold text-[#1A1008] text-sm">
                    {info.symbol} {n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

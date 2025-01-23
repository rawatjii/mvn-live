import React from "react";

export default function numDifferentiation(value) {
    const val = Math.abs(value);
    if (val >= 10000000) return `${(value / 10000000)} Cr*`;
    if (val >= 100000) return `${(value / 100000)} Lacs*`;
    if (val >= 1000) return `${(value / 1000)} Thousand*`;
    if (val >= 100) return `${(value / 100)} Hundred*`;
    return value;
}
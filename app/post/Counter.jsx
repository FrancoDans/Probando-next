"use client";
import { useState } from "react";
export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p style={{ color: "white" }}>COUNT: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

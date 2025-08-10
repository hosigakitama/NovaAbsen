'use client';

import { useEffect } from "react";
import { app } from "@/lib/firebase";

export default function TestApp() {
    useEffect(() => {
        console.log("Firebase app:", app);
    }, []);

    return <div>Firebase app sudah diinisialisasi, cek console.</div>;
}

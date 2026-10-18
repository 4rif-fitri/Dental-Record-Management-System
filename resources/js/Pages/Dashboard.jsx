import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { auth, session } = usePage().props;

    return (
        <>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-gray-100 p-8">
                <div className="mx-auto max-w-5xl">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Dashboard
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Selamat datang ke sistem Laravel + React!
                    </p>

                    <div className="mt-6 rounded-xl bg-white p-6 shadow">
                        <h2 className="text-xl font-semibold">
                            Maklumat Pengguna
                        </h2>

                        <p className="mt-3">
                            Nama: {auth?.user?.name ?? "Guest"}
                        </p>

                        <p>User ID: {session?.user_id ?? "-"}</p>

                        {session?.success && (
                            <p className="mt-4 text-green-600">
                                {session.success}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

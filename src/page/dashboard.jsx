import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import Sidebar from '@/components/ui/sidebar'
import { Plus, Search } from 'lucide-react'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const wishlistItems = [
    {
        icon: "🏖️",
        title: "Liburan ke Korea",
        amount: "Rp500.000/bulan",
        date: "Apr 2027"
    },
    {
        icon: "🕌",
        title: "Umroh",
        amount: "Rp1.000.000/bulan",
        date: "Nov 2026"
    }
]

const transactionItems = [
    {
        icon: "/spotify-icon.svg",
        title: "Spotify",
        subtitle: "Langganan Premium",
        amount: "-Rp54.990"
    },
    {
        icon: "/netflix-icon.svg",
        title: "Netflix",
        subtitle: "Langganan Premium",
        amount: "-Rp186.000"
    }
]

const dataChart = [
    { date: '1', value: 1200 },
    { date: '2', value: 1100 },
    { date: '3', value: 800 },
    { date: '4', value: 1400 },
    { date: '5', value: 1600 },
    { date: '6', value: 1200 },
    { date: '7', value: 1300 },
]

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white flex w-screen overflow-x-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6 max-h-screen overflow-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="search"
                                placeholder="Cari apapun di sini ..."
                                className="w-80 pl-10 pr-4 py-2 rounded-lg bg-zinc-800 border-0 focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <Button className="bg-green-500 hover:bg-green-600 text-black"><Plus /></Button>
                    </div>
                </div>

                {/* Balance Card */}
                <Card className="mb-8 bg-zinc-900 border-0 rounded-lg">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-3 gap-4">
                            <div className='flex flex-col gap-y-4'>
                                <div className="text-3xl font-bold">Rp9.000.000,00</div>
                                <div className="text-sm text-gray-400">Saldo Tersedia</div>
                            </div>
                            <div className="bg-zinc-800 shadow-md rounded-lg p-3">
                                <div className="text-sm text-gray-400">Total Pemasukan</div>
                                <div className="text-2xl font-bold mt-1 text-green-500">+Rp9.543.210,00</div>
                            </div>
                            <div className="bg-zinc-800 shadow-md rounded-lg p-3">
                                <div className="text-sm text-gray-400">Total Pengeluaran</div>
                                <div className="text-2xl font-bold mt-1 text-red-500">-Rp543.210,00</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Charts */}
                {/* <dv className='flex w-full gap-x-2 items-center'> */}
                <div className='w-full h-[300px] flex gap-x-4 bg-zinc-900 border-0 rounded-lg p-4 mb-8'>
                    <div className="bg-zinc-800 shadow-md rounded-lg p-4 w-full h-full">
                        <h1 className="text-md font-semibold mb-2">Pemasukan</h1>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dataChart}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Line type="monotone" dataKey="value" stroke="#48DE80" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="bg-zinc-800 shadow-md rounded-lg p-4 w-full h-full">
                        <h1 className="text-md font-semibold mb-2">Pengeluaran</h1>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dataChart}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Line type="monotone" dataKey="value" stroke="#FF3629" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                {/* </div> */}

                {/* Bottom Cards */}
                <div className="grid grid-cols-3 gap-8">
                    {/* Wishlist */}
                    <Card className="bg-zinc-900 border-0 rounded-lg">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Wishlist</CardTitle>
                            <Button variant="ghost" size="icon"><Plus /></Button>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[180px]">
                                {wishlistItems.map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 mb-4">
                                        <div className="text-2xl">{item.icon}</div>
                                        <div className="flex-1">
                                            <div className="font-medium">{item.title}</div>
                                            <div className="text-sm text-gray-400">{item.amount}</div>
                                        </div>
                                        <div className="text-sm text-green-500">{item.date}</div>
                                    </div>
                                ))}
                            </ScrollArea>
                        </CardContent>
                    </Card>

                    {/* Notes */}
                    <Card className="bg-zinc-900 border-0 rounded-lg">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Catatan</CardTitle>
                            <Button variant="ghost" size="icon"><Plus /></Button>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[180px]">
                                <div className="space-y-4">
                                    <div>
                                        <div className="font-medium">Hutang</div>
                                        <div className="text-sm text-gray-400">Naila 5.500.000, Dody 2.300.000, ...</div>
                                    </div>
                                    <div>
                                        <div className="font-medium">Investasi</div>
                                        <div className="text-sm text-gray-400">Emas batangan 20 gram x 20 pcs, ...</div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>

                    {/* Today's Transactions */}
                    <Card className="bg-zinc-900 border-0 rounded-lg">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Transaksi Hari Ini</CardTitle>
                            <Button variant="ghost" size="icon"><Plus /></Button>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[180px]">
                                {transactionItems.map((item) => (
                                    <div key={item.title} className="flex items-center gap-4 mb-4">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={item.icon} />
                                            <AvatarFallback>SP</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="font-medium">{item.title}</div>
                                            <div className="text-sm text-gray-400">{item.subtitle}</div>
                                        </div>
                                        <div className="text-red-500">{item.amount}</div>
                                    </div>
                                ))}
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}


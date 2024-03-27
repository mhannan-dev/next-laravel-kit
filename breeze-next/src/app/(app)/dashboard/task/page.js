import Header from '@/app/(app)/Header'

export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <Header title="Tasks" />
            <div className="py-12">
                <div className="min-w-full  sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Show task here
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

import DateReserve from '@/components/DateReserve';

export default function BookingPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">
        Venue Booking
      </h1>

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-6">
        <DateReserve />

        <button
          type="submit"
          name="Book Venue"
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-200 mt-6"
        >
          Book Venue
        </button>
      </div>
    </main>
  );
}

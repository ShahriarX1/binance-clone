'use-client'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-4xl bg-green-600 p-4 rounded-md cursor-pointer' onClick={() => console.log('Clicked!')}>Hello</h1>
    </main>
  )
}

import React from 'react';
import Link from 'next/link';

const Layout = ({children}) => {
  return (
    <div className='h-full bg-slate-300 w-full'>
        <header className='bg-yellow-600 uppercase text-white text-2xl py-6'>
            <nav>
                <div className='flex items-center justify-center gap-10'>
                        <Link href='/'>Home</Link>
                        <Link href='/HistoricalStandings'>Historical Standings</Link>
                        <Link href='/CurrentDraftAndTrades'>Drafts and Trades</Link>
                        <Link href='/RuleChanges'>Rule Changes and End-Season Rosters</Link>
                        <Link href='/Keepers'>Keeper Claims and XFL</Link>
                </div>
            </nav>
        </header>
        <main>{children}</main>
        <footer className='bg-black text-purple-600'>
            <div className='flex items-center justify-center'>
                <p>Created by the resident Dark Lord</p>
            </div>
        </footer>
    </div>
  )
}

export default Layout
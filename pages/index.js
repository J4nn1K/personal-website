import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jannik Jorge Grothusen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      </Head>
      <div>

        <div className="bg-white dark:bg-zinc-900 h-s>reen p-4 min-h-screen flex flex-col">

          {/* WARNING BANNER */}
          {/* <div className="alert alert-warning shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>This Page is currently under Development!</span>
            </div>
          </div> */}

          {/* HERO CONTAINER */}
          <div className="flex flex-1 text-center items-center justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-zinc-900 dark:text-white text-5xl font-extrabold">Jannik Jorge Grothusen</h1>
              <p className="py-4 text-zinc-500 dark:text-zinc-400 text-xl font-normal">Making what I want since 2000.</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/jannikjorgegrothusen/" target="_blank" rel="noreferrer" className="text-zinc-900 dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://github.com/J4nn1K/" target="_blank" rel="noreferrer" className="text-zinc-900 dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
        
        {/* <div className="bg-zinc-900 dark:bg-white h-s>reen p-4 min-h-screen flex flex-col">

        </div> */}
      
      </div>
    </div>
  )
}

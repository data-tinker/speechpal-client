import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import demoImage from '@/images/demo.png'


export function HowItWorks() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="pt-20 sm:pt-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            How it works
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Ace your presentations, interviews, and language exams.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 sm:mx-auto sm:max-w-2xl sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {[
                ['Audio or Video', 'Record your speech'],
                ['Use Telegram or Web', 'Upload your file'],
                ['Almost real-time', 'Get a detailed report'],
              ].map(([name, value]) => (
                <div key={name} className="relative lg:pl-8">
                  <DiamondIcon
                    className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-blue-600 stroke-blue-600"
                  />
                  <div className="relative">
                    <div
                      className="font-mono text-sm text-blue-600"
                    >
                      <Tab>
                        <span className="absolute inset-0" />
                        {name}
                      </Tab>
                    </div>
                    <div className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900">
                      <span className="absolute inset-0" />
                        {value}
                    </div>
                  </div>
                </div>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
              <Tab.Panel className="grid grid-cols-1" unmount={false}>
                <div className="relative">
                  <Image
                    className="w-full"
                    src={demoImage}
                    alt=""
                    priority
                  />
                </div>
              </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}

import { Key, Fragment } from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'

import { MainLayout } from '../components/layouts/MainLayout'
import { Rocket } from '../components/rocket/Rocket';

import rocketActive from '../public/rocketActive.svg'
import rocketDeactivate from '../public/rocketDeactivate.svg'
import rocketUnknown from '../public/rocketUnknown.svg'


interface Props {
  capsules:{
    getFetchData?: any| undefined;
  }
}

const HomePage: NextPage<Props> = ({capsules}) => {
  return (
      <MainLayout>
          <Fragment>
            <h2>Capsules status:</h2>
            <section className="sectionCard">
              <article className='activate'>
                <span>Active</span> <Image src={rocketActive} height={50}/>
              </article>    
              <article className='deactivate'>
                <span>Destroyed</span><Image src={rocketDeactivate} height={50}/>
              </article>
              <article className='unknown'>
              <span>Unknown</span><Image src={rocketUnknown} height={50}/>
              </article>
            </section>
            <h2>All Capsules:</h2>
            <section className="sectionCard">
              {capsules.getFetchData.map((element: { capsule_serial: Key | null | undefined }):object=><Rocket  key={element.capsule_serial} capsule={element} />)}
            </section>
          </Fragment>
      </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => { 
  let url = `https://api.spacexdata.com/v3/capsules/`
  let getFetchData = await fetch(url).then(resul => resul.json())

  return {
    props: {
      capsules:{getFetchData}
    }
  }
}

export default HomePage

import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between py-5 px-3 bg-blue-300'>
            <div className='flex flex-row gap-2'>
            <Link href='/' target='_blank'>
<img src='home.png' height={20} width={20}/>
    </Link>
<div>johnmorgan</div>
</div>
<div className='flex gap-5'>
    <Link href='' target='_blank'>
<img src='inbox.png' height={20} width={20}/>
    </Link>
    <Link href='https://www.linkedin.com/in/john-morgan-a6a1632' target='_blank'>
<img src='linkedin.png' height={20} width={20}/>
    </Link>
    <Link href='https://github.com/johnhm22' target='_blank'>
<img src='github.png' height={20} width={20}/>
    </Link>
</div>

    </div>
  )
}

export default Header


type Props = {}

const NavBar = ({}: Props) => {

    
  return (
    <div className='w-full flex gap-12  h-28 fixed items-center top-0 bg-slate-900'>
       <a href="/"><h3 className=' font-worksans text-xl text-white uppercase font-bold p-4 '>Countries <p className='text-sm text-slate-600 '>by Joshua</p> </h3></a> 
        <a className='m-4 text-white bg-slate-950 w-14 text-center  h-8  rounded-lg hover:bg-slate-800' href="/">search</a>
    </div>
  )
}

export default NavBar
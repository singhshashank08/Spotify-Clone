import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LibFilter() {
  return (
      <nav className='mr-auto ml-4 relative'>
          <ul className='flex gap-x-4'>
              <li>
                <NavLink className={' p-3 rounded'} exact activeClassName="bg-topbutton p-3 rounded" to={"/collection"}>
                    <button className='font-semibold text-white active:bg-brenk leading-4 text-[15px] tracking-wide'>
                    Playlists
                    </button>
                </NavLink>
                </li>
                <li>
                <NavLink className={'p-3 rounded'} activeClassName="bg-topbutton p-3 rounded" to={"/collection/podcasts"}>
                    <button className='font-semibold text-white active:bg-brenk leading-4 text-[15px] tracking-wide'>
                        Podcast
                    </button>
                </NavLink>
                </li>
                <li>
                <NavLink className={'p-3 rounded'} activeClassName="bg-topbutton p-3 rounded" to={"/collection/sanatciler"}>
                    <button className='font-semibold text-white active:bg-brenk leading-4 text-[15px] tracking-wide'>
                        Artists
                    </button>
                </NavLink>
                </li>
                <li>
                <NavLink className={'p-3 rounded'} activeClassName="bg-topbutton p-3 rounded" to={"/collection/albumler"}>
                    <button className='font-semibold text-white active:bg-brenk leading-4 text-[15px] tracking-wide'>
                        Albums
                    </button>
                </NavLink>
              </li>
          </ul>
      </nav>
  )
}

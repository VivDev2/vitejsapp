import { Link } from 'react-router-dom';
import { RiDashboardLine, RiMessageLine,RiSettingsLine } from 'react-icons/ri';
import { HiOutlineDocument } from 'react-icons/hi';


function Sidebar() {
  return (
    
    <aside className="hidden sm:flex sm:flex-col">
        <a href="#" className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
          <img
            className="h-12 w-12"
            alt="Company logo"
            src="tri.png"
          />
        </a>
        <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
        <nav className="flex flex-col mx-4 my-6 space-y-4">             

<Link
  to= "/files"
  className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-600 focus:bg-white rounded-lg"
>
  <span className="sr-only">Dashboard</span>
  <RiDashboardLine className="h-6 w-6" />
</Link>
<Link
  to="/message"
  className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-600 focus:bg-white rounded-lg"
>
  <span className="sr-only">Messages</span>
  <RiMessageLine className="h-6 w-6" />
</Link>
<Link
  to="/fileupload"
  className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-purple-600 focus:bg-white rounded-lg"
>
  <span className="sr-only">Documents</span>
  <HiOutlineDocument className="h-6 w-6" />
</Link>

</nav>
        
    
            
          <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
            <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
              <span className="sr-only">Settings</span>
              <RiSettingsLine className="h-6 w-6" />
            </button>
          </div>
        </div>
      </aside>
    
  );
}

export default Sidebar
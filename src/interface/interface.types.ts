//Navbar Interface
export interface HeaderProps {
  islandingpage: boolean;
}


interface descriptionlistProps{
  list:string;
}

interface submenudataProps {
  logo?: JSX.Element;
  title: string;
  description?: string;
  descriptionlist?:descriptionlistProps[];
}

export interface NavbarItem {
  name: string;
  submenu: boolean;
  titledescription?: string;
  submenudata?: submenudataProps[];
}

//LinkPath Function
export interface LinkPathProps {
  pathname: string;
  name: string;
  submenu: boolean;
  description?: string;
  submenudata?: submenudataProps[];
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
}



//   Tooltip Interface
export interface ToolTipProps {
  image: string;
  subname: string;
  title: string;
  firstlink: string;
  secondlink?: string | undefined;
  isRed: boolean;
  listbox: boolean;
}



// Management Data Interface
interface ListItem {
  id: number;
  listtitle: string;
  listdescription: string;
}
export interface ManagementItem {
  id: number;
  ManagerName: string;
  title: string;
  description: string;
  link: string;
  image: string;
  marketerArray: ListItem[];
}
export interface DataProps extends Array<ManagementItem> { }



//Inventory Data Interface
interface ListImageItem {
  id: number;
  image: string;
  listtitle?: string;
  listdescription?: string;
}
export interface IntegrationManagementItem {
  id: number;
  subname: string;
  title: string;
  description: string;
  link: string;
  imageArray: ListImageItem[];
}
export interface IntegrationDataProps extends Array<IntegrationManagementItem> { }


//Blog Data Interface
export interface BlogDataProps {
  id: number;
  image: string;
  subname: string;
  title: string;
  author?: string;
  date?: string;
}


// Image Data 
export interface ImageDataProps {
  image: string;
  subname: string;
  title: string;
  firstlink: string;
  secondlink?: string | undefined;
  isRed: boolean;
}


// Option Data Interface 
export interface Option {
  value: string;
  label: string;
}

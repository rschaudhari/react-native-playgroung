import React from 'react';
import { Icon, Text } from '@ui-kitten/components';


    // === Drawer 
export const DrawerIcon = (props) => (
    <Icon name='menu-outline' {...props} />
);
    
export const RefreshIcon = (props) => (
    <Icon name='refresh' {...props} />
);
export const AlertIcon = (props) => (
    <Icon name='alert-circle-outline' {...props} />
);
    
export const LoginIcon = (props) => (
    <Icon name='log-in-outline' {...props} />
);

export const LogoutIcon = (props) => (
    <Icon name='log-out-outline' {...props} />
);

export const CalendarIcon = (props) => (
    <Icon {...props} name='calendar'/>
);

export const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

export const MobileIcon = (props) => (
    <Icon {...props} name='smartphone-outline' />
);

export const CancelIcon = (props) => (
    <Icon {...props} name='close-outline' />
);

export const ArrowForwardIcon = (props) => (
    <Icon {...props} name='arrow-forward-outline' />
);

export const ForwardIcon = (props) => (
  <Icon {...props} name='arrow-ios-forward'/>
);

export const PersonIcon = (props) => (
    <Icon {...props} name='person'/>
);
export const LockIcon = (props) => (
    <Icon {...props} name='lock'/>
);
export const PersonCheckedIcon = (props) => (
    <Icon {...props} name='person-done-outline'/>
);

export const PriceTagIcon = (props) => (
    <Icon {...props} name='pricetags-outline'/>
);
export const RadioOffIcon = (props) => (
    <Icon {...props} status='primary' name='radio-button-off'/>
);
export const RadioOnIcon = (props) => (
    <Icon {...props} status='primary' name='radio-button-on'/>
);
export const SearchIcon = (props) => (
    <Icon {...props} status='primary' name='search-outline'/>
);
export const CloudDownloadIcon = (props) => (
    <Icon {...props} status='primary' name='cloud-download-outline'/>
);
export const CloudUploadIcon = (props) => (
    <Icon {...props} status='primary' name='cloud-upload-outline'/>
);
export const TreeStructureIcon = (props) => (
    <Icon {...props} name='corner-down-right-outline'/>
);
export const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical'/>
  );

export const rupeeSymbol = () => {
  return (
    <Text category='s2'>₹</Text>
  );
}
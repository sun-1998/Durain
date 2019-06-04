import React from 'react';
import { AppRegistry, Image, WebView , ScrollView} from 'react-native';
import { View } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import Index from './pages/index';
import Index2 from './pages/index2';
import Index21 from './pages/index21';
import Index22 from './pages/index22';
import Index23 from './pages/index23';
import Index24 from './pages/index24';
import Index3 from './pages/index3';
import Index4 from './pages/index4';
import Index31 from './pages/index31';
import Index311 from './pages/index311';
import Index312 from './pages/index312';
import Index313 from './pages/index313';
import Index32 from './pages/index32';
import Index321 from './pages/index321';
import Index322 from './pages/index322';
import Index323 from './pages/index323';
import Index3231 from './pages/index3231';
import Index3232 from './pages/index3232';
import Index33 from './pages/index33';
import Index331 from './pages/index331';
import Index332 from './pages/index332';
import Index333 from './pages/index333';
import Index334 from './pages/index334';
import Index5 from './pages/index5';
import Index51 from './pages/index51';
import Index511 from './pages/index511';
import Index512 from './pages/index512';
import Index513 from './pages/index513';
import Index52 from './pages/index52';
import Index53 from './pages/index53';
import Index54 from './pages/index54';
import Index55 from './pages/index55';
import Index56 from './pages/index56';
import Index57 from './pages/index57';
import Index58 from './pages/index58';
import Youtube from './pages/youtube';



const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Durian',
      headerStyle: { backgroundColor: '#66CC00' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'ดูบันทึก',
      headerStyle: { backgroundColor: '#66CC00' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'แก้ไข',
      headerStyle: { backgroundColor: '#66CC00' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'เพิ่มบันทีก',
      headerStyle: { backgroundColor: '#66CC00' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'ลบบันทึก',
      headerStyle: { backgroundColor: '#66CC00' },
      headerTintColor: '#ffffff',
    },
  },
  Index: {
      screen: Index,
      navigationOptions: {
        title: 'บันทึกช่วยจำ',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },
  Index2: {
      screen: Index2,
      navigationOptions: {
        title: 'พันธุ์ที่นิยมปลูก',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index21: {
      screen: Index21,
      navigationOptions: {
        title: 'พันธุ์หมอนทอง',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index22: {
      screen: Index22,
      navigationOptions: {
        title: 'พันธุ์ก้านยาว',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index23: {
      screen: Index23,
      navigationOptions: {
        title: 'พันธุ์ชะนี',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index24: {
      screen: Index24,
      navigationOptions: {
        title: 'พันธุ์กระดุม',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index3: {
      screen: Index3,
      navigationOptions: {
        title: 'การดูแลรักษา',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },
  Index31: {
      screen: Index31,
      navigationOptions: {
        title: 'เริ่มปลูก',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index311: {
      screen: Index311,
      navigationOptions: {
        title: 'การเตรียมพื้นที่',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },
  Index312: {
      screen: Index312,
      navigationOptions: {
        title: 'วิธีการปลูก',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },
  Index313: {
      screen: Index313,
      navigationOptions: {
        title: 'ฤดูที่ปลูก',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index32: {
      screen: Index32,
      navigationOptions: {
        title: 'ระยะก่อนให้ผล',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index321: {
      screen: Index321,
      navigationOptions: {
        title: 'การให้น้ำ',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index322: {
      screen: Index322,
      navigationOptions: {
        title: 'การตัดแต่งกิ่ง',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index323: {
      screen: Index323,
      navigationOptions: {
        title: 'การใส่ปุ๋ย',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index3231: {
      screen: Index3231,
      navigationOptions: {
        title: 'ปุ๋ยเคมี',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index3232: {
      screen: Index3232,
      navigationOptions: {
        title: 'ปุ๋ยคอก',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index33: {
      screen: Index33,
      navigationOptions: {
        title: 'ระยะให้ผลผลิต',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index331: {
      screen: Index331,
      navigationOptions: {
        title: 'การให้น้ำ',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index332: {
      screen: Index332,
      navigationOptions: {
        title: 'การใส่ปุ๋ย',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index333: {
      screen: Index333,
      navigationOptions: {
        title: 'การตัดแต่งดอก',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index334: {
      screen: Index334,
      navigationOptions: {
        title: 'การตัดแต่งผล',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index4: {
      screen: Index4,
      navigationOptions: {
        title: 'สแกน QR ข้อมูลของต้น',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index5: {
      screen: Index5,
      navigationOptions: {
        title: 'โรคและยา',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },


  Index51: {
      screen: Index51,
      navigationOptions: {
        title: 'โรคจากเชื้อราไฟทอฟธอรา',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index511: {
      screen: Index511,
      navigationOptions: {
        title: 'โรคเข้าทำลายใบ',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index512: {
      screen: Index512,
      navigationOptions: {
        title: 'โรคที่ระบบราก',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index513: {
      screen: Index513,
      navigationOptions: {
        title: 'โรคที่ลำต้นและกิ่ง',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },


  Index52: {
      screen: Index52,
      navigationOptions: {
        title: 'โรคจใบติด',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index53: {
      screen: Index53,
      navigationOptions: {
        title: 'เพลี้ยไก่แจ้',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index54: {
      screen: Index54,
      navigationOptions: {
        title: 'ไรแดง',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index55: {
      screen: Index55,
      navigationOptions: {
        title: 'หนอนเจาะผล',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index56: {
      screen: Index56,
      navigationOptions: {
        title: 'หนอนเจาะเมล็ดทุเรียน',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index57: {
      screen: Index57,
      navigationOptions: {
        title: 'เพลี้ยแป้ง',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },

  Index58: {
      screen: Index58,
      navigationOptions: {
        title: 'โรคผลเน่า',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },
  Youtube: {
      screen: Youtube,
      navigationOptions: {
        title: 'ควรดูก่อนปลูก',
        headerStyle: { backgroundColor: '#66CC00' },
        headerTintColor: '#ffffff',
      },
    },



});

export default createAppContainer(App);
import React from 'react';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { AppRegistry, Image, WebView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
 
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }
 
  render() {
     let pic17 = {
                uri: 'https://uppic.cc/d/KHrR'

          };

        return (
        <View>
           <View style={{alignItems: 'center', justifyContent: 'center' }}>
           <Image source={pic17} style={{width: 220, height: 280}}/>
           </View>

         <View>
         <Mybutton
                  title="พันธุ์ที่นิยมปลูก"
                  customClick={() => this.props.navigation.navigate('Index2')}
         />
         <Mybutton
                  title="การดูแลรักษา"
                  customClick={() => this.props.navigation.navigate('Index3')}
         />
         <Mybutton
                  title="สแกน QR ข้อมูลของต้น"
                  customClick={() => this.props.navigation.navigate('Index4')}
         />
         <Mybutton
                  title="โรคและยา"
                  customClick={() => this.props.navigation.navigate('Index5')}
         />
         <Mybutton
                  title="บันทึกช่วยจำ"
                  customClick={() => this.props.navigation.navigate('Index')}
         />
         </View>

      </View>
    );
  }
}
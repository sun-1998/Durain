import React from 'react';
import { View , ScrollView } from 'react-native';
import { AppRegistry, Image, WebView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default class Index2 extends React.Component {
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
                   uri: 'https://uppic.cc/d/KHr4'

             };

           return (
           <View>
              <View style={{ marginTop : 10 , alignItems: 'center', justifyContent: 'center' }}>
              <Image source={pic17} style={{width: 220, height: 280}}/>
              </View>

         <View>
         <Mybutton
                  title="พันธุ์หมอนทอง"
                  customClick={() => this.props.navigation.navigate('Index21')}
         />
         <Mybutton
                  title="พันธุ์ก้านยาว"
                  customClick={() => this.props.navigation.navigate('Index22')}
         />
         <Mybutton
                  title="พันธุ์ชะนี"
                  customClick={() => this.props.navigation.navigate('Index23')}
         />
         <Mybutton
                  title="พันธุ์กระดุมทอง"
                  customClick={() => this.props.navigation.navigate('Index24')}
         />
         <Mybutton
                  title="ควรดูก่อนปลูก"
                  customClick={() => this.props.navigation.navigate('Youtube')}
         />
         </View>

      </View>
    );
  }
}
import React from 'react';
import { View } from 'react-native';
import { AppRegistry, Image, WebView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default class Index3 extends React.Component {
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
                uri: 'https://uppic.cc/d/KHr6'

          };

        return (
        <View>
           <View style={{ marginTop : 10 , alignItems: 'center', justifyContent: 'center' }}>
           <Image source={pic17} style={{width: 200, height: 200}}/>
           </View>

        <View>
        <Mybutton
          title="เริ่มปลูก"
          customClick={() => this.props.navigation.navigate('Index31')}
        />

        <Mybutton
          title="ระยะก่อนให้ผล"
          customClick={() => this.props.navigation.navigate('Index32')}
        />

        <Mybutton
          title="ระยะให้ผลผลิต"
          customClick={() => this.props.navigation.navigate('Index33')}
        />
        </View>
      </View>
    );
  }
}
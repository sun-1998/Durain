import React from 'react';
import { View } from 'react-native';
import { AppRegistry, Image, WebView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default class Index4 extends React.Component {
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
                          uri: 'https://uppic.cc/d/KGFd'

                             };

                return (
                        <View style={{ marginTop : 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={pic17} style={{width: 200, height: 200}}/>

        <Mytext text="เมื่อพบยอดทุเรียนถูกทำลายมากกว่า 30 เปอร์เซ็นต์ของยอดหรือพบไข่บนยอดมากกว่า 20 เปอร์เซ็นต์ให้พ่นด้วยสารแลมป์ดา ไซฮาโลทริน หรือคาร์บาริลหรือไซเปอร์เมทริน/โฟซาโลน ทุก 7 ถึง 10 วันจนใบแก่" />



      </View>
    );
  }
}


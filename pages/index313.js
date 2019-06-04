import React from 'react';
import { View , ScrollView } from 'react-native';
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
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>

        <Mytext text="หากมีการจัดระบบการให้น้ำอย่างมีประสิทธิภาพ สามารถดูแลให้น้ำกับต้นทุเรียนได้สม่ำเสมอช่วงหลังปลูก  และควรปลูกตั้งแต่เดือนมีนาคมถึงเดือนเมษายน  แต่ถ้าหากจัดระบบน้ำไม่ทันหรือยังไม่อาจดูแลเรื่องน้ำได้ ควรจะปลูกในช่วงต้นฤดูฝน           \t " />


      </View>
    );
  }
}
import React from 'react';
import { View } from 'react-native';
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
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>

        <Mytext text="ถ้าอาการเล็กน้อย ให้ขูดผิวเปลือกส่วนที่เป็นโรคออกนำไปเผาทำลาย แล้วทาด้วยปูนแดง หรือ สารเมตาแลกซิล ถ้าพบอาการรุนแรง ใช้กรดฟอสฟอรัส ฉีดเข้าลำต้น หรือกิ่งในบริเวณตรงข้าม หรือส่วนที่เป็นเนื้อไม้ดีใกล้บริเวณที่เป็นโรค" />



      </View>
    );
  }
}


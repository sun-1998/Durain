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

        <Mytext text="ทำการตัดแต่งดอกหลังจากออกดอก 5 สัปดาห์ ควรตัดแต่งช่อดอกบนกิ่งขนาดเล็ก (เส้นผ่าศูนย์กลางกิ่งน้อยกว่า 2 เซนติเมตร) หรือดอกที่อยู่ปลายกิ่งทิ้งให้เหลือเฉพาะดอกรุ่นเดียวกันในกิ่งเดียวกัน ให้มีจำนวนช่อดอกประมาณ 3 ถึง 6 ช่อดอกต่อความยาวกิ่ง 1 เมตร แต่ละช่อดอกห่างกันประมาณ 30 เซนติเมตร" />


      </View>
    );
  }
}
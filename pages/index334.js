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

        <Mytext text="ครั้งที่ 1 เมื่อผลอายุ 4 ถึง 5 สัปดาห์หลังดอกบาน  ตัดแต่งผลที่มีขนาดเล็ก   รูปทรงบิดเบี้ยว  และไม่อยู่ในตำแหน่งที่ต้องการออก เหลือผลไว้ประมาณ 2 ถึง 3 เท่าของจำนวนผลที่ต้องการไว้จริง ครั้งที่ 2 เมื่อผลอายุ 6 สัปดาห์หลังดอกบาน ระยะนี้ผลที่ปกติจะมีการขยายตัวด้านยาว สีผิวเขียวสดใส หนามมีขนาดปกติเรียวเล็ก ถ้าตรวจพบผลที่มีพัฒนาการผิดปกติ มีขนาดเล็ก หนามแดง หรือมีโรคแมลงเข้าทำลาย ให้ตัดทิ้ง " />


      </View>
    );
  }
}
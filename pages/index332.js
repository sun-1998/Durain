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

        <Mytext text="ควรใส่ปุ๋ยและวัสดุปรับปรุงดินตามผลการตรวจวิเคราะห์ดิน  หรืออาจใส่ปุ๋ยตามแนวทางดังนี้ " />
        <Mytext text="1. ใส่ปุ๋ยเพื่อเพิ่มความสมบูรณ์ต้นหลังเก็บเกี่ยว" />
        <Mytext text="- ปุ๋ยอินทรีย์ จำนวน 20 ถึง 50 กิโลกรัมต่อต้น " />
        <Mytext text="- ปุ๋ยเคมี สูตร 15-15-15 หรือ 16-16-16 อัตราเป็นกิโลกรัมต่อต้นเท่ากับ 1 ใน ของเส้นผ่า ศูนย์กลางทรงพุ่ม" />
        <Mytext text="2. ใส่ปุ๋ยเพื่อส่งเสริมพัฒนาการของผล" />
        <Mytext text="- เมื่อผลมีอายุ 7 สัปดาห์ ใส่ปุ๋ยเคมีสูตร 12-12-17-2 หรือ 13-13-21 อัตราเป็นกิโลกรัมต่อต้น เท่ากับ 1 ใน 3 ของเส้นผ่าศูนย์กลางทรงพุ่ม" />
        <Mytext text="3. ใส่ปุ๋ยเพื่อเพิ่มคุณภาพเนื้อ" />
        <Mytext text="- เมื่อผลมีอายุ 10 ถึง 11 สัปดาห์ ใส่ปุ๋ยเคมีสูตร 0-0-50 อัตรา 1 ถึง 2 กิโลกรัมต่อต้น" />


      </View>
    );
  }
}
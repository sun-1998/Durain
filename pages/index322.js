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

        <Mytext text="เริ่มตัดแต่งกิ่งหลังจากปลูกแล้วประมาณ 1 ถึง 1.5 ปี เพื่อให้ต้นทุเรียนมีโครงสร้างและทรงพุ่มที่ดี และการตัดแต่งกิ่งจะต้องเว้นลำต้นเดี่ยว   และเว้นกิ่งประธานกิ่งแรกสูงจากพื้นดินประมาณ 1 เมตร และไว้กิ่งให้เรียงเป็นระเบียบ เหมาะแก่การไว้ผลและไม่บดบังแสงแดดซึ่งกันและกัน  และจะต้องควบคุมความสูงของลำต้นไว้ที่ประมาณ 7 เมตร" />


      </View>
    );
  }
}
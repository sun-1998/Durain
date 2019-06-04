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

        <Mytext text="ปุ๋ยเคมี สูตร 15-15-15 หรือ 16-16-16 อัตราเป็นกิโลกรัมต่อต้นต่อปี เท่ากับขนาดเส้นผ่าศูนย์กลางทรงพุ่ม (เมตร) แบ่งใส่ 2 ถึง 4 ครั้งต่อปี ยกตัวอย่าง เช่น ต้นทุเรียนมีเส้นผ่าศูนย์กลาง ทรงพุ่ม 3 เมตร ควรใส่ปุ๋ยเคมีปีละ 3 กิโลกรัม แบ่งใส่ 2 ถึง 4 ครั้งต่อปี" />


      </View>
    );
  }
}
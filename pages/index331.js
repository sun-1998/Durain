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

        <Mytext text="ควรให้น้ำสม่ำเสมอในช่วงที่มีการเจริญเติบโตทางใบ  และงดน้ำในช่วงปลายฝนเพื่อเตรียมการออกดอก  เมื่อทุเรียนออกดอกแล้วให้ควบคุมปริมาณน้ำที่จะให้  โดยค่อยๆ เพิ่มปริมาณน้ำขึ้นเรื่อยๆ เพื่อให้ดอกทุเรียนมีพัฒนาการที่ดี จนเมื่อดอกทุเรียนพัฒนาถึงระยะหัวกำไล (ก่อนดอกบาน 1 สัปดาห์) ก็ให้ลดปริมาณน้ำลงโดยให้เพียง 1 ใน 3 ของปกติ เพื่อช่วยให้มีการติดผลดีขึ้นและให้น้ำในปริมาณนี้ไปจนดอกบานและติดผลได้ 1 สัปดาห์ จากนั้นจึงค่อยๆ เพิ่มปริมาณน้ำขึ้นเรื่อยๆ และต้องให้น้ำอย่างเพียงพอและสม่ำเสมอตลอดช่วงพัฒนาการของผลทุเรียน" />


      </View>
    );
  }
}
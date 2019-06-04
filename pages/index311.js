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

        <Mytext text="ต้องปรับพื้นที่ก่อนที่จะกำหนดผังปลูกและติดตั้งระบบน้ำ โดยปรับพื้นที่ให้ราบไม่ให้มีแอ่งที่น้ำท่วมขังได้ และถ้าเป็นไปได้ควรปรับเป็นเนินลูกฟูกเพื่อปลูกทุเรียนบนสันเนิน ระยะห่างระหว่างต้นและระหว่างแถวด้านละ 9 เมตร ปลูกได้ไร่ละ 20 ต้น หรือ 8 ถึง 10 X 8 ถึง10 เมตร ปลูกทุเรียนได้ประมาณ 16 ถึง 25 ต้นต่อไร่ และการทำสวนขนาดใหญ่ ควรขยายระยะระหว่างแถวให้กว้างขึ้นเพื่อสะดวกต่อการนำเครื่องจักรกลต่างๆ ไปทำงานในระหว่างแถว นอกจากนี้ในการวางแนวกำหนดแถวปลูก จะต้องคำนึงถึงแนวปลูกขวางความลาดเทของพื้นที่  หรืออาจกำหนดในแนวตั้งฉากกับถนน  หรือกำหนดแถวปลูกไปในแนวทิศตะวันออกหรือทิศตะวันตก และถ้ามีการจัดวางระบบน้ำจะต้องพิจารณาแนวทางจัดวางท่อในสวนด้วย จากนั้นจึงปักไม้ตามระยะที่กำหนดเพื่อขุดหลุมปลูกต่อไป" />


      </View>
    );
  }
}
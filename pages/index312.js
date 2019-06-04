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

        <Mytext text="การปลูกทุเรียนสามารถทำได้ทั้งการขุดหลุมปลูก    ซึ่งเหมาะกับพื้นที่ที่ค่อนข้างแล้งและยังไม่มีการวางระบบน้ำไว้ก่อนปลูก ซึ่งวิธีนี้ดินในหลุมจะช่วยเก็บความชื้นได้ดีขึ้น  แต่หากมีฝนตกชุก มีน้ำขังจะทำให้รากเน่าและต้นทุเรียนตายได้ง่าย ส่วนการปลูกโดยไม่ต้องขุดหลุม (ปลูกแบบนั่งแท่นหรือยกโคก) เหมาะกับพื้นที่ฝนตกชุก วิธีนี้ทำให้มีการระบายน้ำดี น้ำไม่ขังบริเวณโคนต้น แต่ต้องวางระบบน้ำให้ดีก่อนปลูก ซึ่งต้นทุเรียนจะเจริญเติบโตเร็วกว่าการขุดหลุม ทั้งนี้จุดเน้นที่สำคัญ คือ ควรใช้ต้นกล้าที่มีขนาดเล็ก  มีระบบรากดี ไม่ขดงอ แต่หากจะปลูกด้วยต้นกล้าขนาดใหญ่ควรตัดแต่งรากที่ขดงอทั้งที่ก้นถุงและด้านข้าง รวมทั้งควรมีการพรางแสงให้กับต้นทุเรียนที่ปลูกใหม่ด้วยตาข่ายพรางแสงหรือ(ทาง) ใบมะพร้าว หรือปลูกไม้ที่ให้ร่มเงา เช่น กล้วย  เป็นต้น" />


      </View>
    );
  }
}
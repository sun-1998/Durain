import React from 'react';
import { View } from 'react-native';
import { AppRegistry, Image, WebView , ScrollView} from 'react-native';
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
  let pic17 = {
          uri: 'https://uppic.cc/d/KFz8'

             };

        return (
            <ScrollView>
             <View style={{ marginTop : 10 , alignItems: 'center', justifyContent: 'center' }}>
             <Image source={pic17} style={{width: 200, height: 200}}/>
             </View>


        <Mytext text="ลักษณะเด่น" />
        <Mytext text="เนื้อละเอียดเหนียว สีเนื้อสม่ำเสมอ" />
        <Mytext text="เมื่อสุกงอมแล้วเนื้อไม่แฉะ ติดผลดี" />
        <Mytext text="พบอาการแกนเล็กน้อย ติดผลง่าย" />
        <Mytext text="ผลมีขนาดปานกลางถึงใหญ่" />
        <Mytext text="ลักษณะด้อย" />
        <Mytext text="เปลือกหนา เนื้อไม่ค่อยหนา เมล็ดมีขนาดใหญ่" />
        <Mytext text="และมีจำนวนมากเป็นไส้ซึมง่าย มีอาการเต่า" />
        <Mytext text="เผาปานกลาง ไม่ทนทานต่อโรครากเน่าโคน" />
        <Mytext text="เน่าถ้าหากมีจำนวนผลมากคุณภาพผลจะไม่ดี" />
        <Mytext text="และจะทำให้กิ่งแห้งตายในภายหลัง " />
        <Mytext text="อายุการให้ผลหลังปลูกช้า" />
        <Mytext text="ผลสุกเก็บได้นาน ก้นผลจะแตกง่าย" />

        </ScrollView>

    );
  }
}


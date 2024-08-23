import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React,{useState,useCallback,useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';

const Home = () => {

  
  const navigation=useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [imageZIndex, setImageZIndex] = useState(1);
  const plans = [
    {
      date: 'Mon-Oct-09th',
      header: 'Live Pool',
      content: 'Food Safety & Hygiene Checklist',
      progress: 'Scheduled',
      backgroundColor: '#d0d4df',
    },
    {
      date: 'Tue-Oct-10th',
      header: 'Live Pool',
      content: 'Food Safety & Hygiene Checklist',
      progress: 'Progress',
      backgroundColor: '#febc01',
    },
  ];

  const myActions = [
    {
      count: 3,
      name: 'ToDo',
      status: '10%',
    },
    {
      count: 5,
      name: 'ToDo',
      status: '30%',
    },
    {
      count: 7,
      name: 'ToDo',
      status: '40%',
    },
  ];

  const audits = [
    { status: 'In Progress', count: 4 },
    { status: 'Rejected', count: 4 },
    { status: 'Submitted', count: 4 },
    { status: 'Completed', count: 3 },
  ];

  const totalCount = audits.reduce((acc, audit) => acc + audit.count, 0);

  const recentAudits = [
    {
      auditName: 'Fire Safety Check',
      auditId: 2106482,
      productName: 'Luxury Candles',
      city: 'New York',
      cName1: 'John',
      cName2: 'Doe',
      date: '15 Oct 2023',
      progress: 'In Progress',
      score: '89.45%',
    },
    {
      auditName: 'Quality Assurance Review',
      auditId: 2106483,
      productName: 'Elite Electronics',
      city: 'San Francisco',
      cName1: 'Jane',
      cName2: 'Smith',
      date: '16 Oct 2023',
      progress: 'Submitted',
      score: '92.10%',
    },
  ];
    const startAudit=()=>{
      navigation.navigate('StartAudit')
    }

    const reloadPage=useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

    const redirectAudits=()=>{
      navigation.navigate('Audits');
    }

  return (
    <ScrollView>
      
      <SafeAreaView style={styles.mainOuter}>
        <View style={styles.header}>
          <View style={styles.head}>
            <View style={styles.imageContainer}>
            <Image style={styles.logo} source={require('../../assets/images/logo3.png')} alt="not found"  />
            </View>
           <View style={styles.headOptions}>
           <TouchableOpacity>
           <Feather name="download" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={reloadPage}>
            <MaterialCommunityIcons name="reload" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialIcons name="live-help" size={24} color="white" />
            </TouchableOpacity>
           </View>
          </View>
          <View style={styles.subHeader}>
            <Text style={styles.subHeaderTitle}>Today's Plan</Text>
            <TouchableOpacity style={styles.startButton} onPress={startAudit}>
              <Text style={styles.startButtonText}>Start Audit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.plansContainer}>
            {plans.map((item, index) => (
              <TouchableOpacity key={index} style={styles.planItem} onPress={()=>navigation.navigate('Schedules')}>
                <View style={[styles.dateContainer, { backgroundColor: item.backgroundColor }]}>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
                <View style={styles.planDetails}>
                  <Text style={styles.planHeader}>{item.header}</Text>
                  <Text style={styles.planContent}>{item.content}</Text>
                  <Text style={[styles.planProgress, { backgroundColor: getProgressBackgroundColor(item.backgroundColor) }]}>
                    {item.progress}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllButtonText}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.myActions}>
          <Text style={styles.sectionTitle}>My Actions</Text>
          <View style={styles.myActionsContainer}>
            {myActions.map(({ name, count, status }, index) => (
              <TouchableOpacity key={index} style={styles.action} onPress={()=>navigation.navigate('Actions')}>
                <Text style={styles.actionText}>{count}</Text>
                <Text style={styles.actionName}>{name}</Text>
                <Text style={styles.actionStatus}>{status}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.auditsHead}>
            <Text style={styles.sectionTitle}>Audits</Text>
            <Text style={styles.auditsDate}>
              {plans.map(({ date }, index) => (
                <Text key={index}>{date}</Text>
              ))}
            </Text>
          </View>
          <View style={styles.audits}>
            {audits.map(({ status, count }, index) => (
              <TouchableOpacity key={index} style={styles.audit} onPress={redirectAudits}>
                <View style={styles.auditActions}>
                  <Text>Pause</Text>
                  <Text>{status}</Text>
                </View>
                <View style={styles.auditDetails}>
                  <Text style={styles.auditStatus}>Mark</Text>
                  <Text style={styles.auditCount}>{count}</Text>
                </View>
              </TouchableOpacity>
            ))}
           <View  style={styles.totalAudit}>
                <View style={styles.auditActions}>
                  <Text>Pause</Text>
                  <Text>status</Text>
                </View>
                <View style={styles.auditDetails}>
                  <Text style={styles.auditStatus}>Mark</Text>
                  <Text style={styles.auditCount}>count</Text>
                </View>
              </View>
          </View>
            <Text style={styles.sectionTitle}>Recent Audits</Text>
          <View style={styles.recentAudits}>
            {
              recentAudits.map(({auditName,auditId,productName,city,cName1,cName2,date,progress,score},index)=>{
                return <TouchableOpacity key={index} style={styles.recentAuditItem} onPress={()=>navigation.navigate('Audits')} >
                  <View><Text style={styles.recentAuditHeader} >{auditName}</Text></View>
                  <View style={styles.recentAuditSection}>
                 <View >
                 <View><Text style={styles.recentAuditText} >{auditId}</Text></View>
                  <View><Text style={styles.recentAuditText}>{cName1}</Text></View>
                  <View><Text style={styles.recentAuditText}>{cName2}</Text></View>
                  <View><Text style={styles.recentAuditProgress}>{progress}</Text></View>
                  <View><Text style={styles.recentAuditText}>Score: {score}</Text></View>
                  </View>
                  <View><Text style={styles.recentAuditText}>{productName}</Text></View>
                  <View>
                    <View><Text style={styles.recentAuditText}>{city}</Text></View>
                    <View><Text style={styles.recentAuditText}>{date}</Text></View>
                    <View style={styles.scoreProgress}><Text style={styles.recentAuditText}>{score}</Text></View>
                  </View>
                  </View>

                </TouchableOpacity>
              })
            }
          </View>
          <View style={styles.viewAllButton}>
            <TouchableOpacity>
            <Text style={styles.viewAllButtonText}>View All</Text>
            </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainOuter: {
    flex: 1,
    backgroundColor: '#023047',
    borderColor:'transparent'
  },
 
  header: {
    padding: 16,
    backgroundColor: '#023047',
    position:'sticky',
    top:0,
    zIndex:3,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headOptions:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },
  subHeader: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  startButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
  },
  startButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight:'bold'
  },
  plansContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 12,
    padding: 16,
  },
  planItem: {
    flexDirection: 'row',
    padding: 7,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 1,
  },
  dateContainer: {
    width: '30%',
    borderRadius: 8,
    padding: 8,
    marginRight: 16,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  planDetails: {
    width: '70%',
  },
  planHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  planContent: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  planProgress: {
    fontSize: 14,
    color: '#ffffff',
    padding: 4,
    borderRadius: 4,
    textAlign: 'center',
    width: 'fit-content',
  },
  viewAllButton: {
    paddingHorizontal: 10,
    paddingVertical:0,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  viewAllButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight:'bold',
  },
  myActions: {
    padding: 16,
    backgroundColor: '#8ecae6',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  myActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
  },
  action: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#e5e7f2',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  actionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  actionName: {
    fontSize: 14,
    color: '#333',
  },
  actionStatus: {
    fontSize: 12,
    color: '#666',
  },
  auditsHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  auditsDate: {
    fontSize: 14,
    color: '#333',
  },
  audits: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,

    marginBottom:20,
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping to next line if space is insufficient
    justifyContent: 'space-between', // Adjust space between items
  },
  audit: {
    width: '48%', 
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  totalAudit:{
    width:'100%',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  auditActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  auditDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  auditStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  auditCount: {
    fontSize: 16,
    color: '#666',
  },
  totalAudits: {
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  totalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
  },
  recentAudits: {
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    flex:1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:10,
  },
  recentAuditsContainer: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recentAuditItem: {
    padding: 8,
    backgroundColor: '#369d9e',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 1,
    color:'#ffffff',
  },
  recentAuditSection:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    color:'#ffffff',
    alignItems:'flex-start',
  },
  recentAuditHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color:'#ffffff',

  },
  recentAuditText: {
    fontSize: 14,
    marginBottom: 10,
    color:'#ffffff',

  },
  recentAuditProgress:{
    fontSize: 12,
    color: '#ffffff', 
    paddingHorizontal: 14,
    paddingVertical:10,
    borderRadius: 18, 
    backgroundColor: '#fde052',
    textAlign: 'center',
    width: 'fit-content',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 2,
    marginBottom:8,
  },
  scoreProgress:{
    borderRadius: 45, 
    width: 90,
    height: 90,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#f4b05b',
  },
  imageContainer:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'flex-start',
  },
  logo:{
    width:100,
    height:100,
    resizeMode: 'contain',
  }
});

const getProgressBackgroundColor = (color) => {
  switch (color) {
    case '#d0d4df':
      return '#6c757d';
    case '#febc01':
      return '#ffc107';
    default:
      return '#007bff';
  }
};

export default Home;

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';

const HomePage = () => {
  const [greeting, setGreeting] = useState('Good Morning');
  const [userName] = useState('Alex');

  const quickActions = [
    { id: 1, title: 'Send Money', icon: '💸', color: '#6366F1' },
    { id: 2, title: 'Pay Bills', icon: '🧾', color: '#EC4899' },
    { id: 3, title: 'Top Up', icon: '📱', color: '#10B981' },
    { id: 4, title: 'More', icon: '⚡', color: '#F59E0B' },
  ];

  const recentTransactions = [
    { id: 1, title: 'Netflix Subscription', amount: '-$15.99', time: '2 hours ago', type: 'expense' },
    { id: 2, title: 'Salary Deposit', amount: '+$3,500.00', time: '1 day ago', type: 'income' },
    { id: 3, title: 'Grocery Store', amount: '-$87.23', time: '2 days ago', type: 'expense' },
    { id: 4, title: 'Transfer from John', amount: '+$200.00', time: '3 days ago', type: 'income' },
  ];

  const handleQuickAction = (action) => {
    Toast.show({
      type: 'info',
      text1: `${action.title}`,
      text2: `Opening ${action.title.toLowerCase()}...`,
      visibilityTime: 2000,
    });
  };

  const handleTransactionPress = (transaction) => {
    Toast.show({
      type: 'success',
      text1: 'Transaction Details',
      text2: `${transaction.title} - ${transaction.amount}`,
      visibilityTime: 3000,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1117" />

      {/* Gradient Background */}
      <View style={styles.gradientBackground} />

      {/* Floating Orbs */}
      <View style={[styles.floatingOrb, styles.orb1]} />
      <View style={[styles.floatingOrb, styles.orb2]} />
      <View style={[styles.floatingOrb, styles.orb3]} />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>{greeting}</Text>
              <Text style={styles.userName}>{userName} 👋</Text>
            </View>
            <View style={styles.profileContainer}>
              <Pressable style={styles.notificationButton}>
                <Text style={styles.notificationIcon}>🔔</Text>
              </Pressable>
              <Pressable style={styles.profileButton}>
                <Text style={styles.profileIcon}>👤</Text>
              </Pressable>
            </View>
          </View>

          {/* Balance Card */}
          <View style={styles.balanceCard}>
            <View style={styles.balanceHeader}>
              <Text style={styles.balanceLabel}>Total Balance</Text>
              <Pressable style={styles.eyeButton}>
                <Text style={styles.eyeIcon}>👁️</Text>
              </Pressable>
            </View>
            <Text style={styles.balanceAmount}>$12,456.78</Text>
            <View style={styles.balanceFooter}>
              <View style={styles.balanceChange}>
                <Text style={styles.changeIcon}>📈</Text>
                <Text style={styles.changeText}>+2.5% from last month</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.quickActionsGrid}>
              {quickActions.map((action) => (
                <Pressable
                  key={action.id}
                  style={({ pressed }) => [
                    styles.quickActionCard,
                    pressed && styles.cardPressed,
                  ]}
                  onPress={() => handleQuickAction(action)}
                >
                  <View style={[styles.quickActionIcon, { backgroundColor: `${action.color}20` }]}>
                    <Text style={styles.actionEmoji}>{action.icon}</Text>
                  </View>
                  <Text style={styles.quickActionTitle}>{action.title}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Recent Transactions */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Transactions</Text>
              <Pressable>
                <Text style={styles.seeAllText}>See All</Text>
              </Pressable>
            </View>
            <View style={styles.transactionsContainer}>
              {recentTransactions.map((transaction) => (
                <Pressable
                  key={transaction.id}
                  style={({ pressed }) => [
                    styles.transactionItem,
                    pressed && styles.cardPressed,
                  ]}
                  onPress={() => handleTransactionPress(transaction)}
                >
                  <View style={styles.transactionLeft}>
                    <View style={[
                      styles.transactionIcon,
                      { backgroundColor: transaction.type === 'income' ? '#10B98120' : '#EF444420' },
                    ]}>
                      <Text style={styles.transactionEmoji}>
                        {transaction.type === 'income' ? '↗️' : '↙️'}
                      </Text>
                    </View>
                    <View style={styles.transactionDetails}>
                      <Text style={styles.transactionTitle}>{transaction.title}</Text>
                      <Text style={styles.transactionTime}>{transaction.time}</Text>
                    </View>
                  </View>
                  <Text style={[
                    styles.transactionAmount,
                    { color: transaction.type === 'income' ? '#10B981' : '#EF4444' },
                  ]}>
                    {transaction.amount}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Bottom Spacing */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0D1117',
  },
  floatingOrb: {
    position: 'absolute',
    borderRadius: 100,
    opacity: 0.1,
  },
  orb1: {
    width: 200,
    height: 200,
    backgroundColor: '#6366F1',
    top: -50,
    right: -50,
  },
  orb2: {
    width: 150,
    height: 150,
    backgroundColor: '#EC4899',
    bottom: 100,
    left: -75,
  },
  orb3: {
    width: 100,
    height: 100,
    backgroundColor: '#10B981',
    top: '40%',
    right: 20,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 10,
  },
  greeting: {
    fontSize: 16,
    color: '#8E9AAF',
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  notificationButton: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  notificationIcon: {
    fontSize: 20,
  },
  profileButton: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.3)',
  },
  profileIcon: {
    fontSize: 20,
  },
  balanceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    borderRadius: 20,
    padding: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#8E9AAF',
    fontWeight: '500',
  },
  eyeButton: {
    padding: 4,
  },
  eyeIcon: {
    fontSize: 16,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  balanceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceChange: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  changeIcon: {
    fontSize: 14,
  },
  changeText: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  seeAllText: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '600',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  quickActionCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  cardPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.8,
  },
  quickActionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionEmoji: {
    fontSize: 24,
  },
  quickActionTitle: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
  transactionsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  transactionEmoji: {
    fontSize: 18,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 2,
  },
  transactionTime: {
    fontSize: 12,
    color: '#8E9AAF',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSpacing: {
    height: 20,
  },
});

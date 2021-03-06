// import React, { Component } from 'react';
// import { TradeHistory } from 'components';
// // import redux dependencies
// import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as tradeActions from 'store/modules/trade';

// class TradeHistoryContainer extends Component {
//   lastRequestTime = null

//   loadData = async () => {
//     const { currencyType, TradeActions } = this.props;

//     this.clearWork();

//     const currencyPair = currencyType === 'BTC' ? 'USDT_BTC' : `BTC_${currencyType}`;
//     const now = Math.round(new Date() / 1000);

//     try {
//       await TradeActions.getTradeHistory({
//         currencyPair
//       });
//       this.lastRequestTime = now + 1;
//       this.work();
//     } catch (e) {
      
//     }
//   }  

//   clearWork = () => {
//     if(this.cancel) {
//       this.cancel();
//       this.cancel = null;
//     }

//     if(this.timeoutId) {
//       clearTimeout(this.timeoutId);
//       this.timeoutId = null;
//     }
//   }

//   work = async () => {
//     const { currencyType, TradeActions } = this.props;
//     const currencyPair = currencyType === 'BTC' ? 'USDT_BTC' : `BTC_${currencyType}`;

//     const now = Math.round(new Date() / 1000);

//     try {
//       const p = TradeActions.getTradeHistory({
//         currencyPair,
//         start: this.lastRequestTime,
//         end: now
//       });
//       this.cancel = p.cancel;
//       await p;
//       this.lastRequestTime = now + 1;
//     } catch (e) {

//     }
//     this.timeoutId = setTimeout(() => {
//       this.work();
//     }, 2000);
//   }

//   componentDidMount() {
//       const { currencyType } = this.props;
//       if(currencyType) {
//         this.loadData();
//       }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if(prevProps.currencyType !== this.props.currencyType) {
//       this.loadData();
//     }
//   }
  
  
//   render() {
//     const { tradeHistory } = this.props;
//     return (
//       <TradeHistory historyData={tradeHistory}/>
//     );
//   }
// }

// export default connect(
//   (state) => ({
//     currencyType: state.trade.getIn(['detail', 'currencyType']),
//     tradeHistory: state.trade.getIn(['detail', 'tradeHistory'])
//   }),
//   (dispatch) => ({
//     TradeActions: bindActionCreators(tradeActions, dispatch)
//   })
// )(TradeHistoryContainer);
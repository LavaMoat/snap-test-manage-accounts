wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  //console.log("Snap function handler got originString", originString);

  switch (requestObject.method) {
    case 'manageAccounts':
      return wallet.request({
        method: 'snap_manageAccounts',
        params: requestObject.params,
      });
    default:
      throw new Error('Method not found.');
  }
});

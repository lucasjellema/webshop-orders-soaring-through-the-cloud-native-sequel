#git clone https://github.com/lucasjellema/webshop-orders-soaring-through-the-cloud-native-sequel
# cd webshop-orders-soaring-through-the-cloud-native-sequel

git pull
wait

npm install
wait
ojet build --release
wait
cp -a ./web/. ./jet-on-node/public
wait
cd jet-on-node
wait
npm install
wait
zip -r webshoporders.zip .
wait
cd /oracle-cloud-psm-cli/webshop-orders-soaring-through-the-cloud-native-sequel/jet-on-node
wait
psm accs push -n SoaringWebshopOrders -r node -s hourly -d deployment.json -p webshoporders.zip




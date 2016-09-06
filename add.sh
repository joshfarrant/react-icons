src_path=~/projects/test/node_modules/react-icons
dst_path=~/projects/react-icons

icon_src=https://raw.githubusercontent.com/gorangajic/react-icons/master

echo -n "Enter icon name (lowercase): "
read name

tmp_path=icons/md
wget -q $icon_src/$tmp_path/$name.svg -P $dst_path/$tmp_path/ && echo "Created $name.svg"

tmp_path=md
wget -q $icon_src/$tmp_path/$name.js -P $dst_path/$tmp_path/ && echo "Created $name.js"

upr_name="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"

npm run build

echo -e "\n"
echo "Add the following line to md/index.js:"
echo -e "\n"
echo "export Md$upr_name from './$name';"

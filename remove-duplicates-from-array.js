#Remove Duplicates from a given array of objects

#Function which will remove the duplates from a given array of objects identified by a key
const removeDuplicates = (array, key) => {
	var helperMap = {}
	var arrayAfterDuplicatesAreRemoved = []
	array.map((item) => {
		if(!helperMap[item[key]]){
			helperMap[item[key]] = item
			arrayAfterDuplicatesAreRemoved.push(item)
		}})
	return arrayAfterDuplicatesAreRemoved
}

#Example Usage
#Given an array of users with user object having name and age. This is of size three but with a duplicate object with name John
var users = [
{
	name: "John",
	age: "25"
},
{
	name: "David",
	age: "25"
},
{
	name: "John",
	age: "25"
}
]

#Now if you pass this array of values with the key as 'name' we would get the resulted array of size two
let finalUsers = removeDuplicates(users, 'name')

console.log(finalUsers)

#Output: Will only have two values
[
{"name":"John","age":"25"},
{"name":"David","age":"25"}
]


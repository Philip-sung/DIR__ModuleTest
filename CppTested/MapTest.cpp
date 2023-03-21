#include <iostream>
#include <string>
#include <map>

using namespace std;

int main(void) {

	std::map<std::string, int> score = { {"Taegon", 80}, {"Philip", 77}, {"Dongwook",49} };

	cout << score["Taegon"] << endl;
	cout << score["Philip"] << endl;
	cout << score["Dongwook2"] << endl;

	score["Dongwook2"] = 10;

	cout << score["Taegon"] << endl;
	cout << score["Philip"] << endl;
	cout << score["Dongwook2"] << endl;

	cout << score.at("Dongwook2") << "**" << endl;

	return 0;
}
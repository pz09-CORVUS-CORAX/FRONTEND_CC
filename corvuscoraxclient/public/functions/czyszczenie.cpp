#include <iostream>
using namespace std;
void generujGCode(double szerokosc, double dlugosc, double glebokosc, double posuw, double srednica) {

    std::cout << "G21" << endl << "G90 G94 G0" << endl << "S14000 M3" << endl << endl;
    
int z=1;
    for (int i=0; szerokosc / ((srednica/2)-0.5) >= i-3 ;i++) {
        cout<< "G1 X" << i*((srednica/2)-0.5) << " F" << posuw<<endl;
	cout<< "G1 Z"<< glebokosc <<" F3" <<  endl;
	cout<< "G1 Y" << dlugosc << " F" << posuw << endl;
	cout<< "G1 Z2"<< endl;
	cout<< "G1 Y0" << " F" << 10*posuw << endl;
        
	i++;

	}
}

int main(int argc, char *argv[]) {
    if (argc != 6) {
        std::cerr << "Użycie: " << argv[0] << " <szerokosc_plytki> <dlugosc_plytki> <glebokosc_frezu> <posuw_frezu> <srednica>"<< endl;
        return 1;
    }

    // Parsowanie argumentów wejściowych
    double szerokosc = std::stod(argv[1]);
    double dlugosc = std::stod(argv[2]);
    double glebokosc = stod(argv[3]);
    double posuw = stod(argv[4]);
    double srednica = stod(argv[5]);

    // Wywołanie głównej funkcji generującej G Code
    generujGCode(szerokosc, dlugosc, glebokosc, posuw, srednica);
    cout << endl<< "S0 G0" << endl << "M5" << endl << "Z3" << endl << "G0 X0 Y0 Z3" <<endl;
    return 0;
}


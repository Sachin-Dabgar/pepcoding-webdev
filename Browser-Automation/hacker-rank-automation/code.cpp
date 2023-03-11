#inlcude<iostream>
using namespace std;

int main(){
    int number_Of_elements;
    cin>>number_Of_elements;
    vector<int>array(number_Of_elements);
    int sum_of_array = 0;

    for(int i = 0; i<number_Of_elements; i++){
        cin>>array[i];
        sum_of_array+=array[i];
    }

    cout<<sum_of_array;
    return 0;

}
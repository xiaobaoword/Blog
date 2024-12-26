#include <stdio.h>

#define MaxSize 10

typedef struct {
    int data[MaxSize];
    int length;
} SqlList;

void InitSqlList(SqlList &L) {
    printf("初始化顺序表\n");

    // for (int i = 0; i < MaxSize; i++) {
    //     L.data[i] = i + 1;
    // }
    L.data[0] = 0;
    L.data[1] = 0;
    L.data[2] = 1;
    L.data[3] = 1;
    L.data[4] = 2;
    L.data[5] = 2;
    L.data[6] = 2;
    L.data[7] = 2;
    L.data[8] = 3;
    L.data[9] = 3;
    L.length = MaxSize;
        
    for (int i = 0; i < L.length; i++) {
        printf("i:%d v:%d \n", i, L.data[i]);
    }
    printf("L.length:%d \n", L.length);
    printf("\n");
}

int main () {
    SqlList L;
    InitSqlList(L);
    return 0;
}
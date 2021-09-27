import java.util.*;

public class zeroOnes{
    public static void func(int[] arr){
        int pointer=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]==0){
                arr[pointer]=0;
                pointer++;
            }
            else{
            }
            if(pointer<i)
                arr[i]=1;
        }
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }
    public static void main(String[] args){
        int[] arr={0,1,0,0,0,0,1,1,0,1,0,1};
        func(arr);
    }
}
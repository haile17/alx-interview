#!/usr/bin/python3

''' N queen challange'''


import sys

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: nqueens N")
        sys.exit(1)
        
    try:
        n = int(sys.argv[1])
    except ValueError:
        print('N must be a number')
        exit(1)
    
    if n < 4:
        print('N must be at least 4')
        exit(1)

    result = []
    the_queens = []

    stop = False
    h = 0
    f = 0

    # iterate rows 
    while h < n:
        back = False
        while f < n:

    #check current column safty
            safe = True
            for cord in the_queens:
                col = cord[1]
                if(col == c or col + (r- cord[0]) == c or
                   col - (r-cord[0]) == c)
                    safe = False
                    break
            if not safe:
                if f == n - 1:
                    back = True
                    break
                f += 1
                continue

            # place queen
            
                


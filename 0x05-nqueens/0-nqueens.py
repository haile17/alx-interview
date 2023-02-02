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
    the_queens = []  # coordinates format [row, column]
    stop = False
    h = 0
    f = 0

    #  iterate rows
    while h < n:
        back = False
        #  iterate column
        while f < n:
            #  check current column safty
            safe = True
            for cord in the_queens:
                col = cord[1]
                if(col == f or col + (h - cord[0]) == f or
                        col - (h-cord[0]) == f):
                    safe = False
                    break

            if not safe:
                if f == n - 1:
                    back = True
                    break
                f += 1
                continue

            # place queen
            cords = [h, f]
            the_queens.append(cords)
            # if last row, append solution and reset all to last unfinished row
            # and last safe column in that row
            if h == n - 1:
                result.append(the_queens[:])
                for cord in the_queens:
                    if cord[1] < n - 1:
                        h = cord[0]
                        f = cord[1]
                for i in range(n - h):
                    the_queens.pop()
                if h == n - 1 and f == n - 1:
                    the_queens = []
                    stop = True
                h -= 1
                f += 1
            else:
                f = 0
            break
        if stop:
            break
        # on fail: go back to previous row
        # and continue from last safe column + 1
        if back:
            h -= 1
            while h >= 0:
                f = the_queens[h][1] + 1
                del the_queens[h]  # delete previoous queen coordinates
                if f < n:
                    break
                h -= 1
            if h < 0:
                break
            continue
        h += 1

    for idx, val in enumerate(result):
        if idx == len(result) - 1:
            print(val, end='')
        else:
            print(val)

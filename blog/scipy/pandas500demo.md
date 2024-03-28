# pandas500demo

## 环境依赖

```text
et-xmlfile==1.1.0
numpy==1.26.4
openpyxl==3.1.2
pandas==2.2.1
pyreadline==2.1
python-dateutil==2.9.0.post0
pytz==2024.1
six==1.16.0
tzdata==2024.1
```

## 001　使用随机数创建一个DataFrame

```python
import pandas as pd #导入pandas库，并使用pd重命名pandas
import numpy as np #导入numpy库，并使用np重命名numpy
from numpy import random #导入numpy库的随机数模块random
#使用随机数创建带行标签和列名的DataFrame
df=pd.DataFrame(random.randint(0,5000,size=(5,10)),
index=['R0','R1','R2','R3','R4'],
columns=['C0','C1','C2','C3','C4','C5','C6','C7','C8','C9'])
##使用随机数创建默认的带行标签和列名的DataFrame
#df=pd.DataFrame(random.randint(0,5000,size=(5,10)))
##使用连续的整数创建带行标签和列名的DataFrame
#df=pd.DataFrame(np.arange(50).reshape((5,10)),
index=['R0','R1','R2','R3','R4'],
columns=['C0','C1','C2','C3','C4','C5','C6','C7','C8','C9'])
##使用连续的整数创建默认的带行标签和列名的DataFrame
#df=pd.DataFrame(np.arange(50).reshape((5,10)))
df #输出df的所有数据

```
## 002　使用字母设置DataFrame的行标签

```python
import pandas as pd #导入pandas库，并使用pd重命名pandas
df=pd.read_excel('myexcel.xlsx') #读取 myexcel.xlsx文件的第1个工作表
df #输出 df 的所有数据
#将 df 的行标签调整为从1开始
#df.index=range(1,len(df)+1)
#df.index=pd.Index([1,2,3])
#df.index+=1
#将 df 的行标签调整为字母A、B、C
df.index=['A','B','C']
##输出 df 的第1行数据
#df.loc['A':'A']
df #输出 df 在修改行标签之后的所有数据

```
## 003　使用日期设置DataFrame的行标签

```python
import pandas as pd #导入pandas库，并使用pd重命名pandas
#读取myexcel.xlsx文件的Sheet1工作表
df=pd.read_excel('myexcel.xlsx',sheet_name='Sheet1')
df #输出df的所有数据
#将df的行标签调整为从2021-08-23到2021-08-27
df.index=pd.date_range('20210823',periods=5)
#df.index=pd.date_range('20210823',periods=df.shape[0])
#df.index=pd.date_range(start='20210823',periods=5)
#df.index=pd.date_range(end='20210827',periods=5)
#将df的行标签调整为从2021-08-23到2021-09-04
#df.index=pd.date_range('20210823',periods=5,freq='3D')
#将df的行标签调整为从2021-08-31到2022-04-30
#df.index=pd.date_range('20210831',periods=5,freq='2M')
#将df的行标签调整为从2021-12-31到2029-12-31
#df.index=pd.date_range('20211231',periods=5,freq='2Y')
#输出df的第一行数据
#df.loc['2021-08-23':'2021-08-23']
df #输出df在调整行标签之后的所有数据

```
## 004　使用月份设置DataFrame的行标签

```csv
股票代码,股票名称,收盘价,成交额,流通市值,总市值
300393,中来股份,15.51,12.91亿,141.6亿,168.5亿
603613,国联股份,118.08,5.56亿,262.3亿,406.1亿
300172,中电环保,5.34,2.31亿,36.20亿,36.20亿
300510,金冠股份,9.13,8.89亿,75.07亿,75.65亿
603938,三孚股份,69.08,7.17亿,134.8亿,134.8亿
```

```python
import pandas as pd #导入pandas库，并使用pd重命名pandas
#读取myexcel.xlsx文件的Sheet1工作表
df=pd.read_excel('myexcel.xlsx',sheet_name='Sheet1')
df #输出的所有数据
#将df的行标签调整为从2021-01到2021-05
df.index=pd.period_range(start='2021-01',end='2021-05',freq='M')
#df.index=pd.period_range('1/1/2021',freq='M',periods=5)
#df.index=pd.PeriodIndex(pd.period_range(start='2021-01',end='2021-05',freq='M'))
##将df的行标签调整为从2017年到2021年
#df.index=pd.period_range(start='2017',end='2021',freq='Y')
#df.index=pd.period_range('1/1/2017',freq='Y',periods=5)
##将df的行标签调整为从2021-08-09到2021-08-13
#df.index=pd.period_range('2021-08-09',freq='D',periods=5)
##将df的行标签调整为从2021-09-13 10:00:00到2021-09-13 10:20:00
#df.index=pd.period_range(start='2021-09-13 10:00:00',end='2021-09-13 10:20:00',freq='300S')
##按周(Week)调整df的行标签
#df.index=pd.period_range(start='2021-01-01',freq='W',periods=5)
##输出df的第4行数据
#df.loc['2021-04':'2021-04']
df #输出df在调整行标签之后的所有数据

```
```csv
日期,股票代码,股票名称,收盘价,成交额,流通市值,总市值
2021-01,300393,中来股份,15.51,12.91亿,141.6亿,168.5亿
2021-02,603613,国联股份,118.08,5.56亿,262.3亿,406.1亿
2021-03,300172,中电环保,5.34,2.31亿,36.20亿,36.20亿
2021-04,300510,金冠股份,9.13,8.89亿,75.07亿,75.65亿
2021-05,603938,三孚股份,69.08,7.17亿,134.8亿,134.8亿
```

## 001　使用随机数创建一个DataFrame

```python

```
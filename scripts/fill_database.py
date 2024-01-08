import boto3
import logging
from botocore.exceptions import ClientError

# Setting up logging
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
boto3.set_stream_logger('', logging.DEBUG)


# client = boto3.client('dynamodb')

dynamodb = boto3.resource("dynamodb", region_name = 'us-west-2')
table = dynamodb.Table('qwizgurus_interview_table_uswest2')


questions = [{
    'level':'4',
    'job_role':'Systems Engineer',
    'question_type' : 'System Admin',
    'question': 'What are the standard Linux directories and what are they used for?',
    'answer': '/ (root), /bin (user binaries), /boot (static boot files), /dev (device files), /etc (config files), /home (home directories), /lib (shared libraries), /mnt (temporary mount points), /opt (optional packages), /proc (kernel files), /root (root user home directory), /run (application state files), /sbin (system administration binaries), /srv (service data), /tmp (temporary files), /usr (user binaries), /var (variable data files)',
    },
    {
    'level':'5',
    'job_role':'Systems Development Engineer',
    'question_type' : 'Earn Trust',
    'question': 'Give me an example of a tough or critical piece of feedback you received. What was it and what did you do about it?',
    'answer': 'CORRECT ANSWER',
    },
    {
    'level':'5',
    'job_role':'Systems Engineer',
    'question_type' : 'Are right a lot',
    'question': 'We dont always make the right decision all the time. Tell me about a time when you made a bad decision. What was the impact of that decision? What did you learn? How have you applied what you learned?',
    'answer': 'CORRECT ANSWER',
    },
    {
    'level':'4',
    'job_role':'Systems Analyst',
    'question_type' : 'System Admin',
    'question': 'You have been alerted that a filesystem is filling up. How would you troubleshoot the problem?',
    'answer': 'Typical commands are: pwd, df,  du -sh /filesystem, ls, find, rm',
    },
{
    'level':'5',
    'job_role':'Systems Engineer',
    'question_type' : 'Customer Obsession',
    'question': 'Tell me about a time when you had to balance the needs of the customer with the needs of the business. What did you do? What was the result?',
    'answer': 'CORRECT ANSWER',
    },
    {
    'level':'4',
    'job_role':'Systems Engineer',
    'question_type' : 'Learn and Be Curious',
    'question': 'Describe a time when you took on work outside of your comfort area. How did you identify what you needed to learn to be successful? How did you go about building expertise to meet your goal? Did you meet your goal?',
    'answer': 'CORRECT ANSWER',
    },
    { 
    'level':'4',
    'job_role':'Systems Development Engineer',
    'question_type' : 'System Design',
    'question': 'If you were designing a web based shopping system (like Amazon) to serve a large number of requests to customers globally, what are some of the challenges you would consider and how would you overcome them? ',
    'answer': 'CORRECT',
    },
    ]


for item in questions:
    # print(item)
    response = table.put_item(Item=item)
    print(response)
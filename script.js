const questions = [
  {
    "question": "Your company wants you to build a highly reliable web application with a few public APIs as the backend. You don't expect a lot of user traffic, but traffic could spike occasionally. You want to leverage Cloud Load Balancing, and the solution must be cost-effective for users.\n\nWhat should you do?",
    "options": [
      "Store static content such as HTML and images in Cloud CDN. Host the APIs on App Engine and store the user data in Cloud SQL.",
      "Store static content such as HTML and images in a Cloud Storage bucket. Host the APIs on a zonal Google Kubernetes Engine cluster with worker nodes in multiple zones, and save the user data in Cloud Spanner.",
      "Store static content such as HTML and images in Cloud CDN. Use Cloud Run to host the APIs and save the user data in Cloud SQL.",
      "Store static content such as HTML and images in a Cloud Storage bucket. Use Cloud Functions to host the APIs and save the user data in Firestore."
    ],
    "answer": [
      "Store static content such as HTML and images in a Cloud Storage bucket. Use Cloud Functions to host the APIs and save the user data in Firestore."
    ],
    "multiple": false
  },
  {
    "question": "Your company sends all Google Cloud logs to Cloud Logging. Your security team wants to monitor the logs. You want to ensure that the security team can react quickly if an anomaly such as an unwanted firewall change or server breach is detected. You want to follow Google-recommended practices.\n\nWhat should you do?",
    "options": [
      "Schedule a cron job with Cloud Scheduler. The scheduled job queries the logs every minute for the relevant events.",
      "Export logs to BigQuery, and trigger a query in BigQuery to process the log data for the relevant events.",
      "Export logs to a Pub/Sub topic, and trigger Cloud Function with the relevant log events.",
      "Export logs to a Cloud Storage bucket, and trigger Cloud Run with the relevant log events."
    ],
    "answer": [
      "Export logs to a Pub/Sub topic, and trigger Cloud Function with the relevant log events."
    ],
    "multiple": false
  },
  {
    "question": "You have deployed several instances on Compute Engine. As a security requirement, instances cannot have a public IP address. There is no VPN connection between Google Cloud and your office, and you need to connect via SSH into a specific machine without violating the security requirements.\n\nWhat should you do?",
    "options": [
      "Configure Cloud NAT on the subnet where the instance is hosted. Create an SSH connection to the Cloud NAT IP address to reach the instance.",
      "Add all instances to an unmanaged instance group. Configure TCP Proxy Load Balancing with the instance group as a backend. Connect to the instance using the TCP Proxy IP.",
      "Configure Identity-Aware Proxy (IAP) for the instance and ensure that you have the role of IAP-secured Tunnel User. Use the gcloud command line tool to ssh into the instance.",
      "Create a bastion host in the network to SSH into the bastion host from your office location. From the bastion host, SSH into the desired instance."
    ],
    "answer": [
      "Configure Identity-Aware Proxy (IAP) for the instance and ensure that you have the role of IAP-secured Tunnel User. Use the gcloud command line tool to ssh into the instance."
    ],
    "multiple": false
  },
  {
    "question": "Your company is using Google Cloud. You have two folders under the Organization: Finance and Shopping. The members of the development team are in a Google Group. The development team group has been assigned the Project Owner role on the Organization. You want to prevent the development team from creating resources in projects in the Finance folder.\n\nWhat should you do?",
    "options": [
      "Assign the development team group the Project Viewer role on the Finance folder, and assign the development team group the Project Owner role on the Shopping folder.",
      "Assign the development team group only the Project Viewer role on the Finance folder.",
      "Assign the development team group the Project Owner role on the Shopping folder, and remove the development team group Project Owner role from the Organization.",
      "Assign the development team group only the Project Owner role on the Shopping folder."
    ],
    "answer": [
      "Assign the development team group the Project Owner role on the Shopping folder, and remove the development team group Project Owner role from the Organization."
    ],
    "multiple": false
  },
  {
    "question": "You are developing your microservices application on Google Kubernetes Engine. During testing, you want to validate the behavior of your application in case a specific microservice should suddenly crash.\n\nWhat should you do?",
    "options": [
      "Add a taint to one of the nodes of the Kubernetes cluster. For the specific microservice, configure a pod anti-affinity label that has the name of the tainted node as a value.",
      "Use Istio's fault injection on the particular microservice whose faulty behavior you want to simulate.",
      "Destroy one of the nodes of the Kubernetes cluster to observe the behavior.",
      "Configure Istio's traffic management features to steer the traffic away from a crashing microservice."
    ],
    "answer": [
      "Use Istio's fault injection on the particular microservice whose faulty behavior you want to simulate."
    ],
    "multiple": false
  },
  {
    "question": "Your company is developing a new application that will allow globally distributed users to upload pictures and share them with other selected users. The application will support millions of concurrent users. You want to allow developers to focus on just building code without having to create and maintain the underlying infrastructure. Which service should you use to deploy the application?",
    "options": [
      "App Engine",
      "Cloud Endpoints",
      "Compute Engine",
      "Google Kubernetes Engine"
    ],
    "answer": [
      "App Engine"
    ],
    "multiple": false
  },
  {
    "question": "Your company provides a recommendation engine for retail customers. You are providing retail customers with an API where they can submit a user ID and the API returns a list of recommendations for that user. You are responsible for the API lifecycle and want to ensure stability for your customers in case the API makes backward-incompatible changes. You want to follow Google-recommended practices.\n\nWhat should you do?",
    "options": [
      "Create a distribution list of all customers to inform them of an upcoming backward-incompatible change at least one month before replacing the old API with the new API.",
      "Create an automated process to generate API documentation, and update the public API documentation as part of the CI/CD process when deploying an update to the API.",
      "Use a versioning strategy for the APIs that increases the version number on every backward-incompatible change.",
      "Use a versioning strategy for the APIs that adds the suffix ג€DEPRECATEDג€ to the current API version number on every backward-incompatible change. Use the current version number for the new API."
    ],
    "answer": [
      "Use a versioning strategy for the APIs that increases the version number on every backward-incompatible change."
    ],
    "multiple": false
  },
  {
    "question": "Your company has developed a monolithic, 3-tier application to allow external users to upload and share files. The solution cannot be easily enhanced and lacks reliability. The development team would like to re-architect the application to adopt microservices and a fully managed service approach, but they need to convince their leadership that the effort is worthwhile.\n\nWhich advantage(s) should they highlight to leadership?",
    "options": [
      "The new approach will be significantly less costly, make it easier to manage the underlying infrastructure, and automatically manage the CI/CD pipelines.",
      "The monolithic solution can be converted to a container with Docker. The generated container can then be deployed into a Kubernetes cluster.",
      "The new approach will make it easier to decouple infrastructure from application, develop and release new features, manage the underlying infrastructure, manage CI/CD pipelines and perform A/B testing, and scale the solution if necessary.",
      "The process can be automated with Migrate for Compute Engine."
    ],
    "answer": [
      "The new approach will make it easier to decouple infrastructure from application, develop and release new features, manage the underlying infrastructure, manage CI/CD pipelines and perform A/B testing, and scale the solution if necessary."
    ],
    "multiple": false
  },
  {
    "question": "Your team is developing a web application that will be deployed on Google Kubernetes Engine (GKE). Your CTO expects a successful launch and you need to ensure your application can handle the expected load of tens of thousands of users. You want to test the current deployment to ensure the latency of your application stays below a certain threshold.\n\nWhat should you do?",
    "options": [
      "Use a load testing tool to simulate the expected number of concurrent users and total requests to your application, and inspect the results.",
      "Enable autoscaling on the GKE cluster and enable horizontal pod autoscaling on your application deployments. Send curl requests to your application, and validate if the auto scaling works.",
      "Replicate the application over multiple GKE clusters in every Google Cloud region. Configure a global HTTP(S) load balancer to expose the different clusters over a single global IP address.",
      "Use Cloud Debugger in the development environment to understand the latency between the different microservices."
    ],
    "answer": [
      "Use a load testing tool to simulate the expected number of concurrent users and total requests to your application, and inspect the results."
    ],
    "multiple": false
  },
  {
    "question": "Your company has a Kubernetes application that pulls messages from Pub/Sub and stores them in Filestore. Because the application is simple, it was deployed as a single pod. The infrastructure team has analyzed Pub/Sub metrics and discovered that the application cannot process the messages in real time. Most of them wait for minutes before being processed. You need to scale the elaboration process that is I/O-intensive.\n\nWhat should you do?",
    "options": [
      "Use kubectl autoscale deployment APP_NAME --max 6 --min 2 --cpu-percent 50 to configure Kubernetes autoscaling deployment.",
      "Configure a Kubernetes autoscaling deployment based on the subscription/push_request_latencies metric.",
      "Use the --enable-autoscaling flag when you create the Kubernetes cluster.",
      "Configure a Kubernetes autoscaling deployment based on the subscription/num_undelivered_messages metric."
    ],
    "answer": [
      "Configure a Kubernetes autoscaling deployment based on the subscription/num_undelivered_messages metric."
    ],
    "multiple": false
  },
  {
    "question": "Your company is developing a web-based application. You need to make sure that production deployments are linked to source code commits and are fully auditable. What should you do?",
    "options": [
      "Make sure a developer is tagging the code commit with the date and time of commit.",
      "Make sure a developer is adding a comment to the commit that links to the deployment.",
      "Make the container tag match the source code commit hash.",
      "Make sure the developer is tagging the commits with latest."
    ],
    "answer": [
      "Make the container tag match the source code commit hash."
    ],
    "multiple": false
  },
  {
    "question": "An application development team has come to you for advice. They are planning to write and deploy an HTTP(S) API using Go 1.12. The API will have a very unpredictable workload and must remain reliable during peaks in traffic. They want to minimize operational overhead for this application.\n\nWhich approach should you recommend?",
    "options": [
      "Develop the application with containers, and deploy to Google Kubernetes Engine.",
      "Develop the application for App Engine standard environment.",
      "Use a Managed Instance Group when deploying to Compute Engine.",
      "Develop the application for App Engine flexible environment, using a custom runtime."
    ],
    "answer": [
      "Develop the application for App Engine standard environment."
    ],
    "multiple": false
  },
  {
    "question": "Your company is designing its data lake on Google Cloud and wants to develop different ingestion pipelines to collect unstructured data from different sources. After the data is stored in Google Cloud, it will be processed in several data pipelines to build a recommendation engine for end users on the website. The structure of the data retrieved from the source systems can change at any time. The data must be stored exactly as it was retrieved for reprocessing purposes in case the data structure is incompatible with the current processing pipelines. You need to design an architecture to support the use case after you retrieve the data.\n\nWhat should you do?",
    "options": [
      "Send the data through the processing pipeline, and then store the processed data in a BigQuery table for reprocessing.",
      "Store the data in a BigQuery table. Design the processing pipelines to retrieve the data from the table.",
      "Send the data through the processing pipeline, and then store the processed data in a Cloud Storage bucket for reprocessing.",
      "Store the data in a Cloud Storage bucket. Design the processing pipelines to retrieve the data from the bucket."
    ],
    "answer": [
      "Store the data in a Cloud Storage bucket. Design the processing pipelines to retrieve the data from the bucket."
    ],
    "multiple": false
  },
  {
    "question": "You are responsible for the Google Cloud environment in your company. Multiple departments need access to their own projects, and the members within each department will have the same project responsibilities. You want to structure your Google Cloud environment for minimal maintenance and maximum overview of IAM permissions as each department's projects start and end. You want to follow Google-recommended practices.\n\nWhat should you do?",
    "options": [
      "Grant all department members the required IAM permissions for their respective projects.",
      "Create a Google Group per department and add all department members to their respective groups. Create a folder per department and grant the respective group the required IAM permissions at the folder level. Add the projects under the respective folders.",
      "Create a folder per department and grant the respective members of the department the required IAM permissions at the folder level. Structure all projects for each department under the respective folders.",
      "Create a Google Group per department and add all department members to their respective groups. Grant each group the required IAM permissions for their respective projects."
    ],
    "answer": [
      "Create a Google Group per department and add all department members to their respective groups. Create a folder per department and grant the respective group the required IAM permissions at the folder level. Add the projects under the respective folders."
    ],
    "multiple": false
  },
  {
    "question": "Your company has an application running as a Deployment in a Google Kubernetes Engine (GKE) cluster. You have separate clusters for development, staging, and production. You have discovered that the team is able to deploy a Docker image to the production cluster without first testing the deployment in development and then staging. You want to allow the team to have autonomy but want to prevent this from happening. You want a Google Cloud solution that can be implemented quickly with minimal effort.\n\nWhat should you do?",
    "options": [
      "Configure a Kubernetes lifecycle hook to prevent the container from starting if it is not approved for usage in the given environment.",
      "Implement a corporate policy to prevent teams from deploying Docker images to an environment unless the Docker image was tested in an earlier environment.",
      "Configure binary authorization policies for the development, staging, and production clusters. Create attestations as part of the continuous integration pipeline.",
      "Create a Kubernetes admissions controller to prevent the container from starting if it is not approved for usage in the given environment."
    ],
    "answer": [
      "Configure binary authorization policies for the development, staging, and production clusters. Create attestations as part of the continuous integration pipeline."
    ],
    "multiple": false
  },
  {
    "question": "Your company wants to migrate their 10-TB on-premises database export into Cloud Storage. You want to minimize the time it takes to complete this activity, the overall cost, and database load. The bandwidth between the on-premises environment and Google Cloud is 1 Gbps. You want to follow Google-recommended practices.\n\nWhat should you do?",
    "options": [
      "Develop a Dataflow job to read data directly from the database and write it into Cloud Storage.",
      "Use the Data Transfer appliance to perform an offline migration.",
      "Use a commercial partner ETL solution to extract the data from the on-premises database and upload it into Cloud Storage.",
      "Compress the data and upload it with gsutil -m to enable multi-threaded copy."
    ],
    "answer": [
      "Use the Data Transfer appliance to perform an offline migration."
    ],
    "multiple": false
  },
  {
    "question": "Your company has an enterprise application running on Compute Engine that requires high availability and high performance. The application has been deployed on two instances in two zones in the same region in active-passive mode. The application writes data to a persistent disk. In the case of a single zone outage, that data should be immediately made available to the other instance in the other zone. You want to maximize performance while minimizing downtime and data loss.\n\nWhat should you do?",
    "options": [
      "1. Attach a persistent SSD disk to the first instance. 2. Create a snapshot every hour. 3. In case of a zone outage, recreate a persistent SSD disk in the second instance where data is coming from the created snapshot.",
      "1. Create a Cloud Storage bucket. 2. Mount the bucket into the first instance with gcs-fuse. 3. In case of a zone outage, mount the Cloud Storage bucket to the second instance with gcs-fuse.",
      "1. Attach a regional SSD persistent disk to the first instance. 2. In case of a zone outage, force-attach the disk to the other instance.",
      "1. Attach a local SSD to the first instance disk. 2. Execute an rsync command every hour where the target is a persistent SSD disk attached to the second instance. 3. In case of a zone outage, use the second instance."
    ],
    "answer": [
      "1. Attach a regional SSD persistent disk to the first instance. 2. In case of a zone outage, force-attach the disk to the other instance."
    ],
    "multiple": false
  },
  {
    "question": "You are designing a Data Warehouse on Google Cloud and want to store sensitive data in BigQuery. Your company requires you to generate the encryption keys outside of Google Cloud. You need to implement a solution.\n\nWhat should you do?",
    "options": [
      "Generate a new key in Cloud Key Management Service (Cloud KMS). Store all data in Cloud Storage using the customer-managed key option and select the created key. Set up a Dataflow pipeline to decrypt the data and to store it in a new BigQuery dataset.",
      "Generate a new key in Cloud KMS. Create a dataset in BigQuery using the customer-managed key option and select the created key.",
      "Import a key in Cloud KMS. Store all data in Cloud Storage using the customer-managed key option and select the created key. Set up a Dataflow pipeline to decrypt the data and to store it in a new BigQuery dataset.",
      "Import a key in Cloud KMS. Create a dataset in BigQuery using the customer-supplied key option and select the created key."
    ],
    "answer": [
      "Import a key in Cloud KMS. Create a dataset in BigQuery using the customer-supplied key option and select the created key."
    ],
    "multiple": false
  },
  {
    "question": "Your organization has stored sensitive data in a Cloud Storage bucket. For regulatory reasons, your company must be able to rotate the encryption key used to encrypt the data in the bucket. The data will be processed in Dataproc. You want to follow Google-recommended practices for security.\n\nWhat should you do?",
    "options": [
      "Create a key with Cloud Key Management Service (KMS). Encrypt the data using the encrypt method of Cloud KMS.",
      "Create a key with Cloud Key Management Service (KMS). Set the encryption key on the bucket to the Cloud KMS key.",
      "Generate a GPG key pair. Encrypt the data using the GPG key. Upload the encrypted data to the bucket.",
      "Generate an AES-256 encryption key. Encrypt the data in the bucket using the customer-supplied encryption keys feature."
    ],
    "answer": [
      "Create a key with Cloud Key Management Service (KMS). Set the encryption key on the bucket to the Cloud KMS key."
    ],
    "multiple": false
  },
  {
    "question": "Your team needs to create a Google Kubernetes Engine (GKE) cluster to host a newly built application that requires access to third-party services on the internet. Your company does not allow any Compute Engine instance to have a public IP address on Google Cloud. You need to create a deployment strategy that adheres to these guidelines.\n\nWhat should you do?",
    "options": [
      "Configure the GKE cluster as a private cluster, and configure Cloud NAT Gateway for the cluster subnet.",
      "Configure the GKE cluster as a private cluster. Configure Private Google Access on the Virtual Private Cloud (VPC).",
      "Configure the GKE cluster as a route-based cluster. Configure Private Google Access on the Virtual Private Cloud (VPC).",
      "Create a Compute Engine instance, and install a NAT Proxy on the instance. Configure all workloads on GKE to pass through this proxy to access third-party services on the Internet."
    ],
    "answer": [
      "Configure the GKE cluster as a private cluster, and configure Cloud NAT Gateway for the cluster subnet."
    ],
    "multiple": false
  },
  {
    "question": "Your company has a support ticketing solution that uses App Engine Standard. The project that contains the App Engine application already has a Virtual Private Cloud (VPC) network fully connected to the company's on-premises environment through a Cloud VPN tunnel. You want to enable the App Engine application to communicate with a database that is running in the company's on-premises environment.\n\nWhat should you do?",
    "options": [
      "Configure private Google access for on-premises hosts only.",
      "Configure private Google access.",
      "Configure private services access.",
      "Configure serverless VPC access."
    ],
    "answer": [
      "Configure serverless VPC access."
    ],
    "multiple": false
  },
  {
    "question": "Your company is planning to upload several important files to Cloud Storage. After the upload is completed, they want to verify that the uploaded content is identical to what they have on-premises. You want to minimize the cost and effort of performing this check.\n\nWhat should you do?",
    "options": [
      "1. Use Linux shasum to compute a digest of files you want to upload. 2. Use gsutil -m to upload all the files to Cloud Storage. 3. Use gsutil cp to download the uploaded files. 4. Use Linux shasum to compute a digest of the downloaded files. 5. Compare the hashes.",
      "1. Use gsutil -m to upload the files to Cloud Storage. 2. Develop a custom Java application that computes CRC32C hashes. 3. Use gsutil ls -L gs://[YOUR_BUCKET_NAME] to collect CRC32C hashes of the uploaded files. 4. Compare the hashes.",
      "1. Use gsutil -m to upload all the files to Cloud Storage. 2. Use gsutil cp to download the uploaded files. 3. Use Linux diff to compare the content of the files.",
      "1. Use gsutil -m to upload the files to Cloud Storage. 2. Use gsutil hash -c FILE_NAME to generate CRC32C hashes of all on-premises files. 3. Use gsutil ls -L gs://[YOUR_BUCKET_NAME] to collect CRC32C hashes of the uploaded files. 4. Compare the hashes."
    ],
    "answer": [
      "1. Use gsutil -m to upload the files to Cloud Storage. 2. Use gsutil hash -c FILE_NAME to generate CRC32C hashes of all on-premises files. 3. Use gsutil ls -L gs://[YOUR_BUCKET_NAME] to collect CRC32C hashes of the uploaded files. 4. Compare the hashes."
    ],
    "multiple": false
  },
  {
    "question": "You have deployed an application on Anthos clusters (formerly Anthos GKE). According to the SRE practices at your company, you need to be alerted if request latency is above a certain threshold for a specified amount of time.\n\nWhat should you do?",
    "options": [
      "Install Anthos Service Mesh on your cluster. Use the Google Cloud Console to define a Service Level Objective (SLO), and create an alerting policy based on this SLO.",
      "Enable the Cloud Trace API on your project, and use Cloud Monitoring Alerts to send an alert based on the Cloud Trace metrics.",
      "Use Cloud Profiler to follow up the request latency. Create a custom metric in Cloud Monitoring based on the results of Cloud Profiler, and create an Alerting policy in case this metric exceeds the threshold.",
      "Configure Anthos Config Management on your cluster, and create a yaml file that defines the SLO and alerting policy you want to deploy in your cluster."
    ],
    "answer": [
      "Install Anthos Service Mesh on your cluster. Use the Google Cloud Console to define a Service Level Objective (SLO), and create an alerting policy based on this SLO."
    ],
    "multiple": false
  },
  {
    "question": "Your company has a stateless web API that performs scientific calculations. The web API runs on a single Google Kubernetes Engine (GKE) cluster. The cluster is currently deployed in us-central1. Your company has expanded to offer your API to customers in Asia. You want to reduce the latency for users in Asia.\n\nWhat should you do?",
    "options": [
      "Create a second GKE cluster in asia-southeast1, and expose both APIs using a Service of type LoadBalancer. Add the public IPs to the Cloud DNS zone.",
      "Use a global HTTP(s) load balancer with Cloud CDN enabled.",
      "Create a second GKE cluster in asia-southeast1, and use kubemci to create a global HTTP(s) load balancer.",
      "Increase the memory and CPU allocated to the application in the cluster."
    ],
    "answer": [
      "Create a second GKE cluster in asia-southeast1, and use kubemci to create a global HTTP(s) load balancer."
    ],
    "multiple": false
  },
  {
    "question": "You are migrating third-party applications from optimized on-premises virtual machines to Google Cloud. You are unsure about the optimum CPU and memory options. The applications have a consistent usage pattern across multiple weeks. You want to optimize resource usage for the lowest cost.\n\nWhat should you do?",
    "options": [
      "Create an instance template with the smallest available machine type, and use an image of the third-party application taken from a current on-premises virtual machine. Create a managed instance group that uses average CPU utilization to autoscale the number of instances in the group. Modify the average CPU utilization threshold to optimize the number of instances running.",
      "Create an App Engine flexible environment, and deploy the third-party application using a Dockerfile and a custom runtime. Set CPU and memory options similar to your application's current on-premises virtual machine in the app.yaml file.",
      "Create multiple Compute Engine instances with varying CPU and memory options. Install the Cloud Monitoring agent, and deploy the third-party application on each of them. Run a load test with high traffic levels on the application, and use the results to determine the optimal settings.",
      "Create a Compute Engine instance with CPU and memory options similar to your application's current on-premises virtual machine. Install the Cloud Monitoring agent, and deploy the third-party application. Run a load test with normal traffic levels on the application, and follow the Rightsizing Recommendations in the Cloud Console."
    ],
    "answer": [
      "Create a Compute Engine instance with CPU and memory options similar to your application's current on-premises virtual machine. Install the Cloud Monitoring agent, and deploy the third-party application. Run a load test with normal traffic levels on the application, and follow the Rightsizing Recommendations in the Cloud Console."
    ],
    "multiple": false
  },
  {
    "question": "Your company has a Google Cloud project that uses BigQuery for data warehousing. They have a VPN tunnel between the on-premises environment and Google Cloud that is configured with Cloud VPN. The security team wants to avoid data exfiltration by malicious insiders, compromised code, and accidental oversharing.\n\nWhat should they do?",
    "options": [
      "Configure Private Google Access for on-premises only.",
      "Perform the following tasks: 1. Create a service account. 2. Give the BigQuery JobUser role and Storage Reader role to the service account. 3. Remove all other IAM access from the project.",
      "Configure VPC Service Controls and configure Private Google Access.",
      "Configure Private Google Access."
    ],
    "answer": [
      "Configure VPC Service Controls and configure Private Google Access."
    ],
    "multiple": false
  },
  {
    "question": "You are working at an institution that processes medical data. You are migrating several workloads onto Google Cloud. Company policies require all workloads to run on physically separated hardware, and workloads from different clients must also be separated. You created a sole-tenant node group and added a node for each client. You need to deploy the workloads on these dedicated hosts.\n\nWhat should you do?",
    "options": [
      "Add the node group name as a network tag when creating Compute Engine instances in order to host each workload on the correct node group.",
      "Add the node name as a network tag when creating Compute Engine instances in order to host each workload on the correct node.",
      "Use node affinity labels based on the node group name when creating Compute Engine instances in order to host each workload on the correct node group.",
      "Use node affinity labels based on the node name when creating Compute Engine instances in order to host each workload on the correct node."
    ],
    "answer": [
      "Use node affinity labels based on the node name when creating Compute Engine instances in order to host each workload on the correct node."
    ],
    "multiple": false
  },
  {
    "question": "Your company's test suite is a custom C++ application that runs tests throughout each day on Linux virtual machines. The full test suite takes several hours to complete, running on a limited number of on-premises servers reserved for testing. Your company wants to move the testing infrastructure to the cloud, to reduce the amount of time it takes to fully test a change to the system, while changing the tests as little as possible.\n\nWhich cloud infrastructure should you recommend?",
    "options": [
      "Google Compute Engine unmanaged instance groups and Network Load Balancer",
      "Google Compute Engine managed instance groups with auto-scaling",
      "Google Cloud Dataproc to run Apache Hadoop jobs to process each test",
      "Google App Engine with Google StackDriver for logging"
    ],
    "answer": [
      "Google Compute Engine managed instance groups with auto-scaling"
    ],
    "multiple": false
  },
  {
    "question": "A lead software engineer tells you that his new application design uses websockets and HTTP sessions that are not distributed across the web servers. You want to help him ensure his application will run properly on Google Cloud Platform.\n\nWhat should you do?",
    "options": [
      "Help the engineer to convert his websocket code to use HTTP streaming",
      "Review the encryption requirements for websocket connections with the security team",
      "Meet with the cloud operations team and the engineer to discuss load balancer options",
      "Help the engineer redesign the application to use a distributed user session service that does not rely on websockets and HTTP sessions."
    ],
    "answer": [
      "Meet with the cloud operations team and the engineer to discuss load balancer options"
    ],
    "multiple": false
  },
  {
    "question": "The application reliability team at your company this added a debug feature to their backend service to send all server events to Google Cloud Storage for eventual analysis. The event records are at least 50 KB and at most 15 MB and are expected to peak at 3,000 events per second. You want to minimize data loss. Which process should you implement?",
    "options": [
      "Append metadata to file body. Compress individual files. Name files with serverName- Timestamp. Create a new bucket if bucket is older than 1 hour and save individual files to the new bucket. Otherwise, save files to existing bucket.",
      "Batch every 10,000 events with a single manifest file for metadata. Compress event files and manifest file into a single archive file. Name files using serverName-EventSequence. Create a new bucket if bucket is older than 1 day and save the single archive file to the new bucket. Otherwise, save the single archive file to existing bucket.",
      "Compress individual files. Name files with serverName-EventSequence. Save files to one bucket. Set custom metadata headers for each object after saving.",
      "Append metadata to file body. Compress individual files. Name files with a random prefix pattern. Save files to one bucket."
    ],
    "answer": [
      "Append metadata to file body. Compress individual files. Name files with a random prefix pattern. Save files to one bucket."
    ],
    "multiple": false
  },
];

questions.sort(() => Math.random() - 0.5);


let currentQuestion = 0;
let score = 0;
let showingFeedback = false;
let quizStartTime = new Date();

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const finishBtn = document.getElementById('finishTestBtn');



function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function updateProgress() {
  const progressPercent = ((currentQuestion) / questions.length) * 100;
  document.getElementById('progressBar').style.width = `${progressPercent}%`;
  document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  const shuffledOptions = shuffleArray([...q.options]);
  
  const inputType = q.multiple ? "checkbox" : "radio";

    shuffledOptions.forEach(option => {
      const li = document.createElement("li");
      li.innerHTML = `
        <label class="option">
          <input type="${inputType}" name="option" value="${option}">
          <span>${option}</span>
        </label>`;
      optionsEl.appendChild(li);
    });

  // ✅ Now add the `.selected` logic AFTER options are rendered
  optionsEl.querySelectorAll("input[type='radio']").forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
      input.parentElement.classList.add('selected');
    });
  });

  resultEl.innerHTML = "";
  nextBtn.textContent = "Submit";
  showingFeedback = false;
  updateProgress();

  if (currentQuestion === questions.length - 1) {
    finishBtn.style.display = "block";
  } else {
    finishBtn.style.display = "none";
  }

    if (currentQuestion >= 1) {
      finishBtn.style.display = "block";
    } else {
      finishBtn.style.display = "none";
    }
}


let totalTimeInSeconds = 90 * 60; // 1 hour 30 minutes = 5400 seconds
const timerEl = document.getElementById("timer");

function updateTimerDisplay() {
  const hours = Math.floor(totalTimeInSeconds / 3600);
  const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  const seconds = totalTimeInSeconds % 60;

  let timeParts = [];

  if (hours > 0) timeParts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  if (minutes > 0 || hours > 0) timeParts.push(`${minutes} min${minutes !== 1 ? 's' : ''}`);
  timeParts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);

  timerEl.textContent = `Time Remaining: ${timeParts.join(', ')}`;
}


function startTimer() {
  countdownInterval = setInterval(() => {
    totalTimeInSeconds--;
    updateTimerDisplay();

    if (totalTimeInSeconds <= 0) {
      clearInterval(countdownInterval);
      alert("Time's up! Submitting your quiz.");
      showResult();
    }
  }, 1000);
}



let countdownInterval = setInterval(() => {
  totalTimeInSeconds--;
  updateTimerDisplay();

  if (totalTimeInSeconds <= 0) {
    clearInterval(countdownInterval);
    alert("Time's up! Submitting your quiz.");
    showResult();
  }
}, 1000);

updateTimerDisplay(); // show initial value



nextBtn.addEventListener("click", () => {
  const currentQ = questions[currentQuestion];
  const selectedInputs = Array.from(document.querySelectorAll("input[name='option']:checked"));
  const correctAnswers = currentQ.answer;

  if (!showingFeedback) {
    if (selectedInputs.length === 0) return alert("Please select at least one option.");

    const selectedValues = selectedInputs.map(input => input.value);
    const isCorrect = correctAnswers.length === selectedValues.length &&
                      correctAnswers.every(ans => selectedValues.includes(ans));

    // Disable all inputs
    document.querySelectorAll("input[name='option']").forEach(input => input.disabled = true);

    // Highlight correct and incorrect
    document.querySelectorAll("input[name='option']").forEach(input => {
      const parentLabel = input.parentElement;
      if (correctAnswers.includes(input.value)) {
        parentLabel.classList.add("correct");
      }
      if (input.checked && !correctAnswers.includes(input.value)) {
        parentLabel.classList.add("incorrect");
      }
    });

    // Feedback
    if (isCorrect) {
      score++;
      resultEl.innerHTML = `<p style="color: green;">✅ Correct!</p>`;
    } else {
      resultEl.innerHTML = `<p style="color: red;">❌ Incorrect.</p>
                            <p>Correct Answer: <strong>${correctAnswers.join(", ")}</strong></p>`;
    }

    nextBtn.textContent = currentQuestion < questions.length - 1 ? "Next Question" : "See Result";
    showingFeedback = true;

  } else {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const parts = [];
  if (h > 0) parts.push(`${h}h`);
  if (m > 0 || h > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);

  return parts.join(' ');
}


// Save score to history in localStorage
function saveScoreToHistory(score, total) {
  const endTime = new Date();
  const durationInSeconds = Math.floor((endTime - quizStartTime) / 1000);
  const duration = formatDuration(durationInSeconds);

  const scoreRecord = {
    score,
    total,
    date: endTime.toLocaleString(),
    duration
  };

  let history = JSON.parse(localStorage.getItem('quizScoreHistory')) || [];
  history.push(scoreRecord);
  localStorage.setItem('quizScoreHistory', JSON.stringify(history));
}

// Show full history above quiz
function displayScoreHistory() {
  const container = document.querySelector(".container");
  let history = JSON.parse(localStorage.getItem('quizScoreHistory')) || [];

  // Remove existing history display if any
  const existingHistory = document.getElementById('scoreHistory');
  if (existingHistory) existingHistory.remove();

  if (history.length === 0) return;

  // Create history table
  const historyDiv = document.createElement('div');
  historyDiv.id = 'scoreHistory';
  historyDiv.innerHTML = `
    <h3>Score History</h3>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th>#</th>
          <th>Score</th>
          <th>Time Taken</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        ${history.map((item, idx) => `
          <tr>
            <td>${idx + 1}</td>
            <td>${item.score} / ${item.total}</td>
            <td>${item.duration || '-'}</td>
            <td>${item.date}</td>
          </tr>`).join('')}
      </tbody>
    </table>
    <button id="clearHistoryBtn" style="margin-top: 10px;">Clear History</button>
    <hr>
  `;

  container.insertBefore(historyDiv, document.getElementById("quiz"));

  // Add clear history button event listener
  document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    if (confirm("Are you sure you want to clear your score history?")) {
      localStorage.removeItem('quizScoreHistory');
      displayScoreHistory(); // Remove history display
    }
  });
}

// Updated showResult to save score and show history
function showResult() {
  saveScoreToHistory(score, questions.length);
  document.getElementById("quiz").style.display = "none";
  document.getElementById("finalResult").style.display = "block";
  document.getElementById("finalResult").innerHTML = `
      <h2>Your Score: ${score}/${questions.length}</h2>
      <button id="restartQuizBtn" style="margin-top: 16px;">Restart Quiz</button>
`;
  finishBtn.style.display = "none";

  displayScoreHistory();

  // ✅ Restart logic with timer reset
  document.getElementById("restartQuizBtn").addEventListener("click", () => {
    // Reset quiz state
    score = 0;
    currentQuestion = 0;
    showingFeedback = false;
    quizStartTime = new Date();

    // Reset timer
    clearInterval(countdownInterval);
    totalTimeInSeconds = 90 * 60; // 1 hour 30 minutes
    updateTimerDisplay();
    startTimer(); // start a new countdown

    // Re-shuffle and reload quiz
    questions.sort(() => Math.random() - 0.5);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("finalResult").style.display = "none";
    loadQuestion();
  });
}

// Initial call to show history on page load
// displayScoreHistory(); 

finishBtn.style.display = "none"; // start hidden

startTimer();

// Initial call to load first question
loadQuestion();
